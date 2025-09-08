"use client";
import { skillCategories } from "@/utils/data";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Highlight } from "./TextHighlight";

export const SkillsSection: FC = () => {
  // Flatten categories into one array
  const allSkills = skillCategories.flatMap((category) => category.skills);

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          <Highlight>Skills & Technologies</Highlight>
        </motion.h2>


        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {allSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.15, rotate: 2 }}
              className="flex flex-col items-center group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-purple-400 transition-colors ">
                <Image src={skill.svgPath} alt={skill.name} width={40} height={40} />
              </div>
              {/* Label */}
              <span className="mt-3 text-sm text-gray-300 group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
