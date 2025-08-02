import React, { FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionId } from '@/app/page';

interface HeroSectionProps {
  scrollToSection: (id: SectionId) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mark Alber
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Full Stack Developer
        </p>
        <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
          Crafting exceptional digital experiences through innovative web solutions and cutting-edge technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};