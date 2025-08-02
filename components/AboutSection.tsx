import React, { FC } from 'react';

export const AboutSection: FC = () => {
  const traits = [
    { name: 'Problem Solver', color: 'bg-blue-600' },
    { name: 'Team Player', color: 'bg-purple-600' },
    { name: 'Quick Learner', color: 'bg-pink-600' },
    { name: 'Detail Oriented', color: 'bg-green-600' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating innovative web applications. 
              My journey began with a curiosity for how things work on the web, and has evolved into a deep expertise 
              in modern web technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in React, Next.js, Node.js, and modern cloud architectures. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open source projects, or mentoring 
              aspiring developers.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {traits.map((trait) => (
                <span key={trait.name} className={`${trait.color} px-4 py-2 rounded-full text-sm`}>
                  {trait.name}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};