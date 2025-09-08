"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Highlight } from "./TextHighlight";
import ResumeButton from "./ResumeButton";

export const AboutSection: FC = () => {
  const traits = [
    { name: "Problem Solver", color: "bg-blue-600" },
    { name: "Team Player", color: "bg-purple-600" },
    { name: "Quick Learner", color: "bg-pink-600" },
    { name: "Detail Oriented", color: "bg-green-600" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          <Highlight>About Me</Highlight>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a passionate full-stack developer creating innovative web applications. My journey began
            with a curiosity for how things work on the web, and has evolved
            into a deep expertise in modern web technologies.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in React, Next.js, Node.js, and modern cloud
            architectures. When I&apos;m not coding, you&apos;ll find me
            exploring new technologies, contributing to open source projects,
            or mentoring aspiring developers.
          </p>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {traits.map((trait) => (
              <span
                key={trait.name}
                className={`${trait.color} px-4 py-2 rounded-full text-sm`}
              >
                {trait.name}
              </span>
            ))}
          </motion.div>

          {/* Resume Button */}
          <div className="">
            <ResumeButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
