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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background blobs - responsive positioning and sizing */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-2 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-36 h-36 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Profile Image Block - responsive sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6 sm:mb-8"
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 mt-10">
            <div className="w-full h-full rounded-xl sm:rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
              <Image 
                width="160" 
                height="160" 
                src="/mark.jpg" 
                alt="Profile Picture" 
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
              />
            </div>
          </div>
        </motion.div>

        {/* Name - responsive font sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mark Alber
          </span>
        </motion.h1>

        {/* Subtitle - responsive font sizing */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200"
        >
          Full Stack Developer
        </motion.p>

        {/* Description - responsive font sizing and spacing */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
        >
          <Highlight>
            Crafting exceptional digital experiences through innovative web
            solutions and cutting-edge technologies
          </Highlight>
        </motion.p>

        {/* Social Media - responsive sizing and spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          {[
            { Icon: Github, href: "https://github.com/MarkCoder1" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/mark-alber1/" },
            { Icon: Facebook, href: "https://www.facebook.com/mark.alber.7543" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group touch-manipulation"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-gray-700">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons - responsive design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-sm sm:max-w-none"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-sm sm:text-base"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-white hover:bg-white hover:text-gray-900 active:bg-gray-100 active:text-gray-900 px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 touch-manipulation text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator - responsive positioning */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
    </section>
  );
};  