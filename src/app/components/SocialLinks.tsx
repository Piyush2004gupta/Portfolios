import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Piyush2004gupta',
    icon: Github,
    color: 'hover:bg-primary',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/piyush-gupta-0a4205309/',
    icon: Linkedin,
    color: 'hover:bg-primary',
  },
  {
    name: 'Email',
    url: 'mailto:pg2253890@gmail.com',
    icon: Mail,
    color: 'hover:bg-primary',
  },
];

export function SocialLinks() {
  return (
    <section className="py-12 px-4 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-white">Let's Connect</h3>
            <p className="text-muted-foreground">
              Follow me on social media and stay updated with my latest projects
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-card border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 ${link.color} hover:text-black hover:border-primary`}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}