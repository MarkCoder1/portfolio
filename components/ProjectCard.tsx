import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import { FC } from "react";

interface ProjectCardProps {
    project: Project;
}


export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
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