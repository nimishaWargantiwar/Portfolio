import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "PICT",
      role: "In-house Full Stack Developer Intern",
      duration: "February 2026 – April 2026",
      description: "Collaborated with faculty to gather requirements and translate them into evaluation workflows; implemented authentication, assessment, automated reporting features, and Dockerized deployment.",
      highlights: [
        "Full-stack development with React.js and Node.js",
        "Role-based authentication implementation",
        "Automated report generation",
        "Docker containerization",
        "Faculty requirement analysis"
      ]
    },
    {
      id: 2,
      company: "Nebula Technology",
      role: "Web Developer Intern",
      duration: "June 2023 – August 2023",
      description: "Built a responsive Tour and Travels website using HTML, CSS, and JavaScript with navigation and booking functionality.",
      highlights: [
        "Responsive web design",
        "Frontend development",
        "Booking system implementation",
        "Cross-browser compatibility",
        "User interface development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative fade-in delay-${index + 1}`}>
                {/* Desktop Layout */}
                <div className="hidden md:flex gap-8 items-start">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10 relative">
                    <Briefcase size={24} className="text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-lg border border-dark-700 hover:border-accent/50 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                        <p className="text-accent font-semibold">{experience.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">{experience.duration}</span>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed mb-4">{experience.description}</p>

                    <div className="space-y-2">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Key Contributions</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-accent flex-shrink-0">◆</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 glass p-4 rounded-lg border border-dark-700">
                    <h3 className="text-lg font-bold text-white mb-1">{experience.role}</h3>
                    <p className="text-accent font-semibold text-sm mb-1">{experience.company}</p>
                    <p className="text-gray-400 text-xs font-medium mb-3">{experience.duration}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{experience.description}</p>
                    <ul className="space-y-1">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="text-accent flex-shrink-0">◆</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
