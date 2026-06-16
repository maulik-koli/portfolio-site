import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import { ResumeButton } from '../ui/resume-button'
import { ThemeToggle } from '../ui/theme-toggle'
import { FaUser, FaCode, FaBriefcase, FaFolder, FaEnvelope, FaFileDownload } from "react-icons/fa";

const HEADER_DATA = [
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Skills", link: "#skills", icon: <FaCode /> },
  { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
  { name: "Projects", link: "#work", icon: <FaFolder /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
]


const Header: React.FC = () => {
    return (
      <FloatingNav 
        navItems={HEADER_DATA} 
        actionButton={
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ResumeButton
              className="ml-2 relative flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FaFileDownload className="block sm:hidden" />
              <span className="hidden sm:block">Download Resume</span>
            </ResumeButton>
          </div>
        }
      />
    )
}

export default Header