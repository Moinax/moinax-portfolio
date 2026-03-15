import { type ReactNode, type ElementType, Fragment } from 'react';

type TagRenderer = (children: string) => ReactNode;

const DEFAULT_TAGS: Record<string, TagRenderer> = {
  strong: (c) => <strong>{c}</strong>,
  em: (c) => <em>{c}</em>,
};

interface RichTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  tags?: Record<string, TagRenderer>;
}

/**
 * Parses a string containing simple XML-like tags (<strong>, <em>, or custom)
 * and renders them as React elements. Does NOT support nesting.
 */
export function RichText({ text, as: Tag = 'span', className, tags }: RichTextProps) {
  const allTags = { ...DEFAULT_TAGS, ...tags };
  const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tagNames = Object.keys(allTags).map(escapeRegex).join('|');
  const regex = new RegExp(`<(${tagNames})>(.*?)</\\1>`, 'g');

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Text before the tag
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, tagName, content] = match;
    parts.push(<Fragment key={match.index}>{allTags[tagName](content)}</Fragment>);
    lastIndex = regex.lastIndex;
  }

  // Remaining text after last tag
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <Tag className={className}>{parts}</Tag>;
}
