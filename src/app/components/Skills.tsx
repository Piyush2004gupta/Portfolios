import { motion } from 'motion/react';
import { Code, Brain, Network, Database, Server, Cloud } from 'lucide-react';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Brain,
    title: 'Generative AI / LLMs',
    skills: [
      'OpenAI API',
      'Hugging Face',
      'Transformers',
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Network,
    title: 'Agentic Frameworks',
    skills: ['LangChain', 'LlamaIndex', 'LangGraph'],
    color: 'from-green-600 to-emerald-600',
  },
  {
    icon: Brain,
    title: 'Machine Learning / Deep Learning',
    skills: ['PyTorch', 'scikit-learn', 'CNNs', 'Computer Vision'],
    color: 'from-purple-600 to-indigo-600',
  },
  {
    icon: Database,
    title: 'Databases & Vector Stores',
    skills: ['Pinecone', 'FAISS', 'ChromaDB', 'PostgreSQL'],
    color: 'from-teal-600 to-cyan-600',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    skills: ['FastAPI', 'RESTful APIs', 'Authentication', 'Middleware'],
    color: 'from-orange-600 to-red-600',
  },
  {
    icon: Cloud,
    title: 'Deployment & MLOps',
    skills: ['Docker', 'GitHub', 'Cloud fundamentals'],
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: Brain,
    title: 'Evaluation & Reliability',
    skills: ['LLM evaluation', 'hallucination reduction', 'prompt testing'],
    color: 'from-pink-600 to-rose-600',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-primary/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="bg-secondary hover:bg-primary hover:text-black transition-colors border border-white/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}