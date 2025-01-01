import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      <h3 className="text-lg sm:text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
        >
          <Github size={18} />
          <span className="hidden sm:inline">Code</span> {/* Hide "Code" text on small screens */}
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
        >
          <ExternalLink size={18} />
          <span className="hidden sm:inline">Live Demo</span> {/* Hide "Live Demo" text on small screens */}
        </a>
      </div>
    </div>
  );
};
