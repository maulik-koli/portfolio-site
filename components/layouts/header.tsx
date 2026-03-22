import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import { ResumeButton } from '../ui/resume-button'
import { FaUser, FaCode, FaBriefcase, FaFolder, FaEnvelope } from "react-icons/fa";


const HEADER_DATA = [
    { name: "About",      link: "#about",      icon: <FaUser /> },
    { name: "Skills",     link: "#skills",     icon: <FaCode /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Projects",   link: "#work",       icon: <FaFolder /> },
    { name: "Contact",    link: "#contact",    icon: <FaEnvelope /> },
]

const Header: React.FC = () => {
    return (
      <FloatingNav 
        navItems={HEADER_DATA} 
        actionButton={
          <ResumeButton
            className="ml-2 relative flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="block sm:hidden"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            <span className="hidden sm:block">Download Resume</span>
          </ResumeButton>
        }
      />
    )
}

export default Header