import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Use sm:grid-cols-2 for tablets and larger */}
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
