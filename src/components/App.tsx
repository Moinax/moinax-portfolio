import { LanguageProvider } from '../i18n/LanguageContext';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Education } from './Education';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Footer />
    </LanguageProvider>
  );
};
