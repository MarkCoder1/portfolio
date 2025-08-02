import { Job } from "@/types";
import { FC } from "react";

interface ExperienceItemProps {
  job: Job;
}


export const ExperienceItem: FC<ExperienceItemProps> = ({ job }) => {
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