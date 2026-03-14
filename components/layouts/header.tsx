import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import { FaUser, FaCode, FaBriefcase, FaFolder, FaEnvelope } from "react-icons/fa";


const HEADER_DATA = [
    { name: "About",      link: "#about",      icon: <FaUser /> },
    { name: "Skills",     link: "#skills",     icon: <FaCode /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Projects",   link: "#work",       icon: <FaFolder /> },
    { name: "Contact",    link: "#contact",    icon: <FaEnvelope /> },
]

const Header: React.FC = () => {
    return <FloatingNav navItems={HEADER_DATA} /> 
}

export default Header