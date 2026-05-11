import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

const certifications = [
  {
    name: 'AI/ML Certificate',
    issuer: 'To be specified',
    date: '2024',
    credentialId: 'To be added',
    skills: ['Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Neural Networks'],
    verifyUrl: '#',
  },
  {
    name: 'LLM - AI Agent',
    issuer: 'To be specified',
    date: '2024',
    credentialId: 'To be added',
    skills: ['Large Language Models', 'AI Agents', 'Agentic Systems', 'LLM Applications'],
    verifyUrl: '#',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-12 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4">
            Professional certifications and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-primary/50"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 break-words text-white">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Issued:</span>
                  <span className="text-white">{cert.date}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ID:</span>
                  <span className="text-xs text-white">{cert.credentialId}</span>
                </div>

                <div>
                  <h4 className="mb-2 text-white">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-secondary border border-white/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-4"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}