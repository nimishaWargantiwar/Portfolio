import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "C++", "C", "JavaScript", "Python"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Node.js", "Express.js"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker"]
    },
    {
      category: "AI & ML",
      skills: ["RAG", "LLMs", "LangChain", "Embeddings"]
    },
    {
      category: "Core CS",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`fade-in delay-${Math.min(index + 1, 5)}`}
            >
              <div className="glass p-6 rounded-lg border border-dark-700 hover:border-accent/50 card-hover">
                <h3 className="text-lg font-bold text-accent mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-dark-800 border border-dark-600 text-gray-300 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-lg border border-accent/30 bg-accent/5">
            <p className="text-accent font-semibold mb-2">Full-Stack Development</p>
            <p className="text-gray-400 text-sm">End-to-end web application development with modern frameworks</p>
          </div>
          <div className="glass p-6 rounded-lg border border-accent/30 bg-accent/5">
            <p className="text-accent font-semibold mb-2">AI / RAG Technologies</p>
            <p className="text-gray-400 text-sm">Retrieval-augmented generation, LLMs, and semantic search</p>
          </div>
          <div className="glass p-6 rounded-lg border border-accent/30 bg-accent/5">
            <p className="text-accent font-semibold mb-2">REST APIs & Databases</p>
            <p className="text-gray-400 text-sm">Building scalable backends with relational and NoSQL databases</p>
          </div>
        </div>
      </div>
    </section>
  );
}
