import React, { FC } from 'react';

interface Job {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

interface ExperienceItemProps {
  job: Job;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ job }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 group">
      <div className="md:w-1/4">
        <div className="text-blue-400 font-semibold">{job.period}</div>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
        <div className="text-gray-400 mb-4">{job.company} • {job.location}</div>
        <p className="text-gray-300 mb-4">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span key={skill} className="bg-gray-700 text-xs px-2 py-1 rounded hover:bg-gray-600 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ExperienceSection: FC = () => {
  const jobs: Job[] = [
    {
      period: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      description: 'Lead development of multiple high-traffic web applications serving 100k+ users. Mentored junior developers and implemented best practices for code quality and performance.',
      skills: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      period: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.',
      skills: ['Vue.js', 'Python', 'Django', 'MongoDB']
    },
    {
      period: '2019 - 2020',
      title: 'Frontend Developer',
      company: 'WebAgency',
      location: 'New York, NY',
      description: 'Specialized in creating responsive, interactive user interfaces for various client projects. Focused on performance optimization and cross-browser compatibility.',
      skills: ['JavaScript', 'CSS3', 'jQuery', 'Sass']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <ExperienceItem key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};