import { jobs } from '@/utils/data';
import React, { FC } from 'react';
import { ExperienceItem } from './ExperienceItem';


export const ExperienceSection: FC = () => {
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