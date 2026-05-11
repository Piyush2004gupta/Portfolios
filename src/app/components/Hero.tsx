import { motion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-8"
          >
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Piyush Gupta</span>
            <span className="text-sm text-primary uppercase tracking-wider">AI/ML Engineer</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            <span className="text-white">Building Intelligent</span>
            <br />
            <span className="text-white">Systems with </span>
            <span className="text-primary">AI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I design and build AI-powered systems using LLMs, RAG pipelines, and autonomous agents — helping startups and businesses automate workflows, analyze data, and ship intelligent products faster.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black hover:bg-white/90 px-8"
            >
              View AI Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-white/20 text-white hover:bg-white/10 px-8"
            >
              About Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}