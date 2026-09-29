import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { config } from '../config';

export default function Projects() {
  const projects = [
    {
      id: 1,
      number: "01",
      name: "VaultX",
      tagline: "Secure Document Management & Intelligent Document Engine",
      description: "Built a full-stack document management platform with role-based access control, document search, bundling, and expiring shareable links using Spring Boot, React.js, PostgreSQL, and MinIO/S3 object storage.",
      date: "June 2026",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "React.js", "MinIO/S3"],
      features: [
        "Role-based access control",
        "Document search & indexing",
        "Document bundling",
        "Automatic text extraction",
        "Duplicate-document detection",
        "PDF merge and split",
        "Expiring share links",
        "Configurable download limits"
      ],
      github: config.PROJECTS.VAULTX.GITHUB_URL,
      live: config.PROJECTS.VAULTX.LIVE_URL,
      featured: true,
    },
    {
      id: 2,
      number: "02",
      name: "Chat with PDF",
      tagline: "RAG-based Document Question Answering System",
      description: "Built a RAG pipeline using PyPDF2, LangChain, and HuggingFace embeddings to index uploaded PDFs and retrieve relevant passages through semantic search.",
      date: "July 2026",
      techStack: ["Python", "Streamlit", "LangChain", "PyPDF2", "HuggingFace", "Embeddings"],
      features: [
        "PDF upload & processing",
        "Text extraction",
        "Document chunking",
        "Semantic embeddings",
        "Semantic search",
        "Context retrieval",
        "LLM-based Q&A",
        "Streamlit interface"
      ],
      github: config.PROJECTS.CHAT_PDF.GITHUB_URL,
      live: config.PROJECTS.CHAT_PDF.LIVE_URL,
      featured: false,
    },
    {
      id: 3,
      number: "03",
      name: "PICT Smart CIE",
      tagline: "Evaluation Platform",
      description: "Built a MERN application to digitize Continuous Internal Evaluation with role-based authentication for faculty and admin users and rubric-based grading modules.",
      date: "February 2026 – April 2026",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker"],
      features: [
        "Faculty authentication",
        "Admin authentication",
        "Rubric-based grading",
        "Automated Excel reports",
        "Automated PDF reports",
        "Dockerized deployment",
        "Role-based workflows",
        "Data management"
      ],
      github: config.PROJECTS.CIE.GITHUB_URL,
      live: config.PROJECTS.CIE.LIVE_URL,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`fade-in delay-${Math.min(index + 1, 5)}`}
            >
              <div className={`grid md:grid-cols-5 gap-8 items-start ${project.featured ? 'glass p-8 rounded-xl border border-accent/30 bg-gradient-to-br from-dark-900 to-dark-800' : 'glass p-8 rounded-xl border border-dark-700'}`}>
                {/* Project Number & Info */}
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-3xl font-bold ${project.featured ? 'text-accent' : 'text-gray-500'}`}>
                        {project.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-accent text-sm font-medium mb-3">{project.tagline}</p>
                      <p className="text-gray-400 text-sm mb-4">{project.date}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="pt-4">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-800 border border-dark-600 text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-dark-900 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 text-sm"
                        aria-label={`GitHub repository for ${project.name}`}
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors duration-300 text-sm"
                          aria-label={`Live demo for ${project.name}`}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="md:col-span-3">
                  <div className="space-y-4">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Key Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className="text-accent mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
