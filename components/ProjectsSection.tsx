import React, { FC } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  tags: string[];
  tagColors: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <div className="text-6xl group-hover:scale-110 transition-transform">{project.icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tag} className={`${project.tagColors[tagIndex]} text-xs px-2 py-1 rounded`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
            Live Demo <ExternalLink size={14} />
          </button>
          <button className="text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-1">
            GitHub <Github size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      icon: '🚀',
      gradient: 'from-blue-500 to-purple-600',
      tags: ['React', 'Node.js', 'MongoDB'],
      tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features.',
      icon: '📱',
      gradient: 'from-green-500 to-blue-600',
      tags: ['Next.js', 'Socket.io', 'Redis'],
      tagColors: ['bg-blue-600', 'bg-yellow-600', 'bg-red-600']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      icon: '📊',
      gradient: 'from-purple-500 to-pink-600',
      tags: ['Vue.js', 'Chart.js', 'Firebase'],
      tagColors: ['bg-blue-600', 'bg-green-600', 'bg-orange-600']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};