import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { config } from '../config';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
              ✨ B.E. Information Technology @ PICT
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-white">Nimisha</span>
            <span className="block text-gradient">Wargantiwar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            Full-Stack Developer | AI/RAG Enthusiast
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm sm:text-base">
            <div className="flex flex-col">
              <span className="text-accent font-semibold text-lg">9.62</span>
              <span className="text-gray-400">CGPA @ PICT</span>
            </div>
            <div className="hidden sm:flex h-12 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
            <div className="flex flex-col">
              <span className="text-accent font-semibold text-lg">Full-Stack</span>
              <span className="text-gray-400">Development</span>
            </div>
            <div className="hidden sm:flex h-12 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
            <div className="flex flex-col">
              <span className="text-accent font-semibold text-lg">AI / RAG</span>
              <span className="text-gray-400">Technologies</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed pt-4">
            Building full-stack applications and AI-powered solutions using Java, Spring Boot, React.js, Node.js, databases, and modern AI technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-dark-900 rounded-lg font-semibold hover:bg-blue-400 btn-hover shadow-lg shadow-accent/20"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={config.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-accent hover:text-accent btn-hover"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={config.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-accent hover:text-accent btn-hover"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={`mailto:${config.EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-accent hover:text-accent btn-hover"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
