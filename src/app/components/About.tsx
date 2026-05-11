import { motion } from 'motion/react';
import { Sparkles, Cpu, Code, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'AI/ML Focus',
    description: 'Deep expertise in machine learning, LLMs, and building production-ready AI solutions',
  },
  {
    icon: Cpu,
    title: 'Agentic Systems',
    description: 'Specialized in building autonomous AI agents with LangChain, LangGraph, and custom frameworks',
  },
  {
    icon: Zap,
    title: 'Real-World Impact',
    description: 'Focus on practical, production-ready solutions that deliver tangible business value',
  },
];

export function About() {
  return (
    <section id="about" className="py-12 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              I'm Piyush Gupta, an AI/ML developer passionate about building intelligent systems using Machine Learning, Deep Learning, Computer Vision, and Generative AI. Currently pursuing B.Tech (2024–2028), I focus on creating real-world AI solutions that combine strong engineering with practical deployment.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My work includes projects in LLMs, RAG pipelines, computer vision, predictive modeling, and AI-powered web applications. I enjoy building scalable and production-ready systems using technologies like Python, TensorFlow, PyTorch, OpenCV, Flask, and modern AI frameworks.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm particularly interested in Agentic AI, autonomous systems, and AI applications in agriculture, robotics, and automation. My goal is to develop impactful AI products that solve real-world problems and deliver measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg bg-card border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-white">{highlight.title}</h4>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}