import React from 'react';

const techStack = [
  'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
  'Tailwind CSS', 'Git', 'REST APIs', 'GraphQL'
];

const getRandomColor = (tech: string) => {
  const colors = {
    'React': 'hover:bg-blue-500',
    'TypeScript': 'hover:bg-blue-600',
    'Node.js': 'hover:bg-green-500',
    'Express': 'hover:bg-gray-700',
    'MongoDB': 'hover:bg-green-600',
    'Tailwind CSS': 'hover:bg-cyan-500',
    'Git': 'hover:bg-orange-500',
    'REST APIs': 'hover:bg-purple-500',
    'GraphQL': 'hover:bg-pink-500'
  };
  return colors[tech as keyof typeof colors] || 'hover:bg-blue-500';
};

const TechStack = () => {
  return (
    <div className="text-center md:text-left"> 
      <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className={`bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm 
              ${getRandomColor(tech)} hover:text-white transform hover:scale-105 
              transition-all duration-300 cursor-pointer
              sm:px-2 sm:py-0.5  // Adjust padding on smaller screens 
              `} 
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
