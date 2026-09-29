import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { config } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-2">Nimisha Wargantiwar</h3>
            <p className="text-gray-400 text-sm">B.E. Information Technology | PICT</p>
            <p className="text-gray-400 text-sm">Full-Stack Developer | AI/RAG Specialist</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Connect</p>
            <div className="flex gap-4">
              <a
                href={config.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={config.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${config.EMAIL}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 py-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Nimisha Wargantiwar. All rights reserved.</p>
            <p>Designed & Built with React, Vite & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
