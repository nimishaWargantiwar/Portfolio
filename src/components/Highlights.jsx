import React from 'react';
import { Zap, Code2, Brain, Database } from 'lucide-react';

export default function Highlights() {
  const stats = [
    {
      id: 1,
      value: "9.62",
      label: "CGPA @ PICT",
      icon: Zap,
    },
    {
      id: 2,
      value: "94.57%",
      label: "Diploma Score",
      icon: Code2,
    },
    {
      id: 3,
      value: "100+",
      label: "Bootcamp Attendees",
      icon: Brain,
    },
    {
      id: 4,
      value: "3",
      label: "Major Projects",
      icon: Database,
    },
  ];

  const expertise = [
    "Full-Stack Development",
    "AI / RAG",
    "Docker",
    "REST APIs",
    "Microservices",
    "Database Design"
  ];

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`fade-in delay-${index + 1}`}
              >
                <div className="glass p-6 rounded-lg border border-dark-700 text-center hover:border-accent/50 card-hover">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Tags */}
        <div className="glass p-8 rounded-lg border border-dark-700 fade-in">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Core Expertise</p>
          <div className="flex flex-wrap gap-3">
            {expertise.map((exp) => (
              <span
                key={exp}
                className="px-4 py-2 bg-dark-800 border border-accent/30 text-accent rounded-full text-sm font-medium hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
