"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      icon: "🚀",
      gradient: "from-blue-500 to-purple-600",
      tags: ["React", "Node.js", "MongoDB"],
      tagColors: ["bg-blue-600", "bg-green-600", "bg-purple-600"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates and team features.",
      icon: "📱",
      gradient: "from-green-500 to-blue-600",
      tags: ["Next.js", "Socket.io", "Redis"],
      tagColors: ["bg-blue-600", "bg-yellow-600", "bg-red-600"],
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts and data visualization.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-600",
      tags: ["Vue.js", "Chart.js", "Firebase"],
      tagColors: ["bg-blue-600", "bg-green-600", "bg-orange-600"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
