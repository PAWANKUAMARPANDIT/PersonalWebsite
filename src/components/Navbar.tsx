import React from 'react';
import { FileText, Home, FolderGit2, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between h-auto md:h-16 relative">
          <div className="flex items-center justify-between w-full md:w-auto">
            <span className="text-xl font-bold text-gray-800">Portfolio</span>
          </div>
          {/* Navbar for medium and larger screens */}
          <div className="hidden md:flex md:items-center md:space-x-8 w-full md:w-auto mt-4 md:mt-0">
            <a href="#home" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 md:py-0">
              <Home size={20} />
              <span>Home</span>
            </a>
            <a href="#about" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 md:py-0">
              <FileText size={20} />
              <span>About</span>
            </a>
            <a href="#projects" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 md:py-0">
              <FolderGit2 size={20} />
              <span>Projects</span>
            </a>
            <a href="#contact" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 md:py-0">
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
          {/* Resume button for medium and larger screens */}
          <div className="hidden md:flex md:items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 inline-block"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
