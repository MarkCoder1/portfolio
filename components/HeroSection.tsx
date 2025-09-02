"use client";
import React, { FC } from "react";
import { ChevronDown, Github, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { SectionId } from "@/app/page";
import { Highlight } from "./TextHighlight";
import Image from "next/image";  

interface HeroSectionProps {
  scrollToSection: (id: SectionId) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center"
    >
      {/* background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <div className="z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Profile Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
              <Image width="160" height="160" src="/mark.jpg" alt="Profile Picture" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mark Alber
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto"
        >
          <Highlight>
            Crafting exceptional digital experiences through innovative web
            solutions and cutting-edge technologies
          </Highlight>
        </motion.p>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-6 mb-10"
        >
          {[
            { Icon: Github, href: "https://github.com/lionzak" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/mark-alber1/" },
            { Icon: Facebook, href: "https://www.facebook.com/mark.alber.7543" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 2 }}
              className="relative group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};
