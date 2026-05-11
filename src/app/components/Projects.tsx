import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';

const projects = [
  {
    name: 'AI-Powered Lead Generation System',
    description:
      'An intelligent AI-powered Lead Generation System that automates client discovery, lead qualification, and personalized outreach using Agentic AI workflows. The system extracts potential leads from multiple sources, analyzes relevance using LLMs, and organizes high-quality prospects into a structured pipeline.',
    techStack: ['Python', 'JavaScript', 'LangGraph', 'LangChain', 'OpenAI API', 'Gemini API', 'FastAPI', 'Node.js', 'React.js', 'Tailwind CSS', 'Selenium', 'BeautifulSoup', 'Playwright', 'MongoDB', 'PostgreSQL', 'FAISS', 'ChromaDB', 'Docker', 'AWS'],
    features: [
      'Agentic AI workflows for autonomous lead discovery',
      'Multi-source lead extraction with intelligent scraping',
      'LLM-powered lead qualification and relevance analysis',
      'RAG implementation for context-aware prospect matching',
      'Automated personalized outreach generation',
      'Structured lead pipeline with database management',
    ],
    github: 'https://github.com/Piyush2004gupta/leadai',
    demo: 'https://youtu.be/qrPc82chJy0',
    video: null,
    videoUrl: null,
  },
  {
    name: 'Crop and Weed Detection System',
    description:
      'An AI-powered Computer Vision system designed to detect and classify crops and weeds in agricultural fields using Deep Learning. The model helps automate weed identification, enabling precision agriculture and reducing manual labor and pesticide usage.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'YOLO', 'CNN', 'Flask', 'FastAPI', 'NumPy', 'Pandas', 'Matplotlib'],
    features: [
      'Real-time crop vs weed classification',
      'Deep learning-based image recognition',
      'High-accuracy object detection system',
      'Supports precision farming applications',
      'Automated agricultural monitoring',
      'Scalable for drone and robotic integration',
      'YOLO/OpenCV powered detection pipeline',
      'Smart field surveillance and analytics',
      'Fast image processing with low latency',
      'AI-based decision support for farmers',
      'Multi-class weed identification capability',
      'Optimized for real-world farm environments',
    ],
    github: 'https://github.com/Piyush2004gupta/weed',
    demo: 'https://youtu.be/nnNMFnTEN2o',
    video: null,
    videoUrl: null,
  },
  {
    name: 'AI-Powered Accident Detection System',
    description:
      'An AI-powered real-time Accident Detection System that uses Transformer-based Deep Learning models and Computer Vision techniques to identify road accidents from live video feeds. The system is designed for smart surveillance, traffic monitoring, and emergency response automation.',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Vision Transformer (ViT)', 'TimeSformer', 'Video Swin Transformer', 'OpenCV', 'YOLO', 'CNN', 'FastAPI', 'Flask', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'Real-time accident detection system',
      'AI-powered vehicle collision recognition',
      'Instant emergency alert generation',
      'GPS-enabled live location tracking',
      'Automated accident monitoring',
      'Fast response notification system',
      'Supports smart city surveillance',
      'High-accuracy object detection model',
      'Real-time video stream processing',
      'Detects vehicle crashes and rollover',
      'Transformer-based video understanding',
      'Multi-object vehicle monitoring',
    ],
    github: 'https://github.com/Piyush2004gupta/AccidentDetection',
    demo: 'https://youtu.be/rPW8jdqEnac',
    video: null,
    videoUrl: null,
  },
];

export function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<{ video?: string; videoUrl?: string } | null>(null);

  return (
    <section id="projects" className="py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4">
            Real-world applications showcasing AI/ML expertise and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 flex flex-col group hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-white">{project.name}</h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-0">{project.description}</p>

              <div className="mb-3 mt-1">
                <h4 className="mb-1 text-white">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-white/20 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-0">
                <h4 className="mb-1 text-white">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 mt-1 pt-1 border-t border-white/10">
                <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" className="flex-1 bg-primary text-black hover:bg-primary/90" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
                {(project.video || project.videoUrl) && (
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-black hover:bg-primary/90"
                    onClick={() => setSelectedVideo({ video: project.video || undefined, videoUrl: project.videoUrl || undefined })}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Video
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black">
                {selectedVideo.video ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.video}?autoplay=1`}
                    title="Project Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : selectedVideo.videoUrl ? (
                  <video
                    className="w-full h-full"
                    controls
                    autoPlay
                    src={selectedVideo.videoUrl}
                  />
                ) : null}
              </div>
              <div className="p-4 flex justify-end">
                <Button variant="outline" onClick={() => setSelectedVideo(null)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}