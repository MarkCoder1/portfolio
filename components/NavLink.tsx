import { SectionId } from "@/app/page";
import { FC } from "react";

interface NavLinkProps {
  href: SectionId;
  children: React.ReactNode;
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
  onClick?: () => void;
}

export const NavLink: FC<NavLinkProps> = ({ href, children, activeSection, scrollToSection, onClick }) => (
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