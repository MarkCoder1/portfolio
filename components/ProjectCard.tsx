import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl 
            transition-all duration-300 hover:-translate-y-3 group max-w-lg">

            {/* Project Image */}
            <div className="h-64 w-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-lg whitespace-normal break-words">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                    {project.techImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="tech-icon"
                            className="w-8 h-8 object-contain"
                        />
                    ))}
                </div>

                <div className="flex gap-6">
                    <Link
                        href={project.liveDemoUrl || "/"}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-lg"
                    >
                        Live Demo <ExternalLink size={18} />
                    </Link>
                    <Link
                        href={project.githubUrl || "/"}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-2 text-lg"
                    >
                        GitHub <Github size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
