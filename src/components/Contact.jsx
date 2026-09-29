import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { config } from '../config';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 text-center">
          {/* Section Title */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Build Something Together</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full mx-auto"></div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm open to software development opportunities, internships, collaborations, and interesting technical projects. 
            Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-lg">
            <div className="flex items-center justify-center gap-3">
              <Mail size={20} className="text-accent" />
              <a
                href={`mailto:${config.EMAIL}`}
                className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium"
              >
                {config.EMAIL}
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a
              href={`mailto:${config.EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-dark-900 rounded-lg font-semibold hover:bg-blue-400 btn-hover shadow-lg shadow-accent/20"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href={config.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-accent hover:text-accent btn-hover"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={config.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-accent hover:text-accent btn-hover"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Additional Note */}
          <div className="glass p-6 rounded-lg border border-dark-700 mt-12">
            <p className="text-gray-300 text-sm">
              Whether you have a question or just want to say hello, feel free to get in touch. 
              I'll try my best to get back to you as soon as possible! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
