import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { config } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-900/95 backdrop-blur-md border-b border-dark-700 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <span className="text-xl font-bold text-gradient">NW</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Resume Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={config.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href={config.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={config.RESUME_URL}
              download="Nimisha_Wargantiwar_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-dark-900 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 btn-hover"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-sm px-4 py-2 rounded hover:bg-dark-800"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-4 py-2 border-t border-dark-700 mt-3 pt-3">
                <a
                  href={config.GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={config.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={config.RESUME_URL}
                  download="Nimisha_Wargantiwar_Resume.pdf"
                  className="ml-auto flex items-center gap-2 px-3 py-2 bg-accent text-dark-900 rounded text-sm font-semibold hover:bg-blue-400 transition-colors duration-300"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
