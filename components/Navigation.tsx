import React, { useState, FC } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '@/app/page';

interface NavLinkProps {
  href: SectionId;
  children: React.ReactNode;
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ href, children, activeSection, scrollToSection, onClick }) => (
  <button
    onClick={() => {
      scrollToSection(href);
      if (onClick) {
        onClick();
      }
    }}
    className={`hover:text-blue-400 transition-colors ${
      activeSection === href ? 'text-blue-400' : 'text-white'
    }`}
  >
    {children}
  </button>
);

interface NavigationProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

export const Navigation: FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MA
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="home" activeSection={activeSection} scrollToSection={scrollToSection}>Home</NavLink>
            <NavLink href="about" activeSection={activeSection} scrollToSection={scrollToSection}>About</NavLink>
            <NavLink href="skills" activeSection={activeSection} scrollToSection={scrollToSection}>Skills</NavLink>
            <NavLink href="projects" activeSection={activeSection} scrollToSection={scrollToSection}>Projects</NavLink>
            <NavLink href="experience" activeSection={activeSection} scrollToSection={scrollToSection}>Experience</NavLink>
            <NavLink href="contact" activeSection={activeSection} scrollToSection={scrollToSection}>Contact</NavLink>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <NavLink href="home" activeSection={activeSection} scrollToSection={scrollToSection} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="about" activeSection={activeSection} scrollToSection={scrollToSection} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="skills" activeSection={activeSection} scrollToSection={scrollToSection} onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
            <NavLink href="projects" activeSection={activeSection} scrollToSection={scrollToSection} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="experience" activeSection={activeSection} scrollToSection={scrollToSection} onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
            <NavLink href="contact" activeSection={activeSection} scrollToSection={scrollToSection} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};