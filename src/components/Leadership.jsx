import React from 'react';
import { Users, Award, Lightbulb } from 'lucide-react';

export default function Leadership() {
  const leadership = [
    {
      id: 1,
      role: "External Affairs Head",
      organization: "Game Dev Utopia",
      duration: "July 2025 – July 2026",
      description: "Managed external relations, established collaborations with student organizations, and coordinated inter-college technical events.",
      icon: Users,
    },
    {
      id: 2,
      role: "Organizer & Speaker",
      organization: "Special Interests Groups (SIGs)",
      duration: "April 2025",
      description: "Conducted a 3-day Web Development Bootcamp with 100+ attendees covering HTML, CSS, and JavaScript.",
      icon: Lightbulb,
    },
    {
      id: 3,
      role: "President",
      organization: "Rotary Club, Pimpri Chinchwad Polytechnic",
      duration: "October 2021 – September 2022",
      description: "Led community service activities, awareness campaigns, and club events throughout the academic year.",
      icon: Award,
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Leadership & Extracurricular</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full"></div>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`fade-in delay-${index + 1}`}
              >
                <div className="glass p-6 rounded-lg border border-dark-700 hover:border-accent/50 card-hover h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.role}</h3>
                      <p className="text-accent text-sm font-semibold">{item.organization}</p>
                      <p className="text-gray-400 text-xs font-medium mt-1">{item.duration}</p>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-lg border border-accent/30 bg-accent/5 fade-in delay-4">
            <p className="text-accent font-semibold mb-2">100+ Attendees</p>
            <p className="text-gray-400 text-sm">Conducted an intensive 3-day Web Development Bootcamp reaching over 100 students</p>
          </div>
          <div className="glass p-6 rounded-lg border border-accent/30 bg-accent/5 fade-in delay-5">
            <p className="text-accent font-semibold mb-2">Community Impact</p>
            <p className="text-gray-400 text-sm">Led community service initiatives, organized technical events, and fostered collaborations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
