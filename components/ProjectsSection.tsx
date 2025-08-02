import React, { FC } from 'react';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';


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