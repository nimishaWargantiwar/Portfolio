import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      id: 1,
      school: "Pune Institute of Computer Technology",
      degree: "B.E. Information Technology",
      duration: "2024 – Present",
      achievement: "CGPA: 9.62",
      icon: GraduationCap,
    },
    {
      id: 2,
      school: "Pimpri Chinchwad Polytechnic",
      degree: "Diploma in Computer Engineering",
      duration: "2021 – 2024",
      achievement: "94.57%",
      icon: Award,
    },
    {
      id: 3,
      school: "Vidya Pratishthan's Magarpatta City Public School",
      degree: "ICSE Class X",
      duration: "2021",
      achievement: "94.40%",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={`relative fade-in delay-${index + 1}`}>
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-start gap-8">
                    {index % 2 === 0 ? (
                      <>
                        {/* Left Content */}
                        <div className="flex-1 text-right pr-8">
                          <div className="space-y-2">
                            <p className="text-gray-400 text-sm font-medium">{item.duration}</p>
                            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                            <p className="text-gray-400">{item.school}</p>
                            <p className="text-accent font-semibold text-sm pt-2">{item.achievement}</p>
                          </div>
                        </div>

                        {/* Center Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10 relative">
                          <Icon size={24} className="text-accent" />
                        </div>

                        {/* Right Empty Space */}
                        <div className="flex-1"></div>
                      </>
                    ) : (
                      <>
                        {/* Left Empty Space */}
                        <div className="flex-1"></div>

                        {/* Center Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10 relative">
                          <Icon size={24} className="text-accent" />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 pl-8">
                          <div className="space-y-2">
                            <p className="text-gray-400 text-sm font-medium">{item.duration}</p>
                            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                            <p className="text-gray-400">{item.school}</p>
                            <p className="text-accent font-semibold text-sm pt-2">{item.achievement}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm font-medium">{item.duration}</p>
                        <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                        <p className="text-gray-400 text-sm">{item.school}</p>
                        <p className="text-accent font-semibold text-sm pt-2">{item.achievement}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
