import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4">
            Let's discuss how I can help bring your AI/ML projects to life
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-card p-6 rounded-xl border border-white/10 shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white">Email</h4>
                  <a
                    href="mailto:pg2253890@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pg2253890@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-6 rounded-xl border border-white/10 shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white">Phone</h4>
                  <a
                    href="tel:+917428503197"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7428503197
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-xl border border-white/10 shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-white">Location</h4>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10 shadow-sm hover:border-primary/50 transition-colors">
              <h4 className="mb-4 text-white">Open to Opportunities</h4>
              <p className="text-muted-foreground mb-4">
                I'm currently available for full-time positions, contract work, and consulting projects in:
              </p>
              <ul className="space-y-2">
                {['AI/ML Engineering', 'Agentic Systems Development', 'Full-Stack AI Applications', 'Technical Consulting'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}