import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen" id="home">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <SocialLinks />
      <Footer />
      <Toaster />
      <Analytics />
    </div>
  );
}