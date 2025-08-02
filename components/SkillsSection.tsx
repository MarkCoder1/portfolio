import React, { FC } from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export const SkillsSection: FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '🔺' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'Tailwind', icon: '🎨' },
      ]
    },
    {
      title: 'Backend',
      color: 'green',
      skills: [
        { name: 'Node.js', icon: '📗' },
        { name: 'Python', icon: '🐍' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
      ]
    },
    {
      title: 'Tools',
      color: 'purple',
      skills: [
        { name: 'Git', icon: '🐙' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Webpack', icon: '🔧' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-${category.color}-500 transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}-500/25`}
            >
              <h3 className={`text-2xl font-bold mb-6 text-${category.color}-400`}>{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="text-center group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};