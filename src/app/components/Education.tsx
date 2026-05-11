import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in Robotics and Artificial Intelligence',
    institution: 'DIT University',
    year: '2024 - 2028',
    location: 'Dehradun, India',
    gpa: 'In Progress',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Data Structures & Algorithms',
      'Robotics & Automation',
      'Computer Vision',
    ],
    honors: ['Currently Pursuing'],
  },
];

export function Education() {
  return (
    <section id="education" className="py-12 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-primary/50"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="mb-1 text-white">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <p className="text-muted-foreground">{edu.year}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-white">
                        <span>Relevant Coursework</span>
                      </h4>
                      <ul className="space-y-1">
                        {edu.coursework.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-muted-foreground">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-white">
                        <Award className="w-4 h-4" />
                        <span>Honors & Awards</span>
                      </h4>
                      <ul className="space-y-1">
                        {edu.honors.map((honor, honorIndex) => (
                          <li key={honorIndex} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-muted-foreground">{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}