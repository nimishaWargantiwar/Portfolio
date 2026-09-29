import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-1 gap-8 fade-in">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a B.E. Information Technology student at Pune Institute of Computer Technology (PICT) with a 9.62 CGPA. 
              I am passionate about building full-stack applications, solving software engineering problems, and exploring AI-powered systems.
            </p>
            
            <p>
              My experience spans across modern web technologies and backend frameworks:
            </p>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span><strong>Languages & Fundamentals:</strong> Java, C++, C, JavaScript, Python, Data Structures & Algorithms, OOP, DBMS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span><strong>Frontend:</strong> React.js, HTML, CSS, Tailwind CSS, responsive design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span><strong>Backend:</strong> Spring Boot, Node.js, Express.js, REST APIs, role-based authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL, SQL optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span><strong>Tools & DevOps:</strong> Git, GitHub, Docker, containerization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">→</span>
                <span><strong>AI Technologies:</strong> RAG (Retrieval-Augmented Generation), LLMs, LangChain, embeddings, semantic search</span>
              </li>
            </ul>

            <p className="pt-4 border-t border-dark-700">
              Through internships, academic projects, and technical leadership roles, I have worked on real-world applications 
              involving document management systems, evaluation platforms, and AI-powered document question answering. I thrive on 
              building scalable, user-centric solutions and continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
