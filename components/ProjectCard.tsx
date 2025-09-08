import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl 
  transition-all duration-300 hover:-translate-y-3 group w-full h-[600px] max-w-sm mx-auto flex flex-col"
        >
            {/* Project Image */}
            <div className="h-64 w-full overflow-hidden flex-shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 overflow-hidden">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                {/* Scrollable description */}
                <p className="text-gray-300 mb-4 text-sm whitespace-normal break-words overflow-y-auto pr-2 custom-scrollbar">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                    {project.techImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="tech-icon"
                            className="w-7 h-7 object-contain"
                        />
                    ))}
                </div>

                <div className="mt-auto flex gap-4">
                    <Link
                        href={project.liveDemoUrl || "/"}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-md"
                    >
                        Live Demo <ExternalLink size={16} />
                    </Link>
                    <Link
                        href={project.githubUrl || "/"}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-2 text-sm"
                    >
                        GitHub <Github size={16} />
                    </Link>
                </div>
            </div>
        </div>

    );
};
