import React from 'react';
import TechStack from './TechStack';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-100 via-green-100 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/3 order-2 md:order-1"> 
            <img
              src="/engineer.jpg" 
              alt="Profile"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-center md:text-left mb-4">About Me</h2>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              Welcome to my Portfolio profile! I am Pawan Kuamar Pandit, a passionate full-stack developer 
              specializing in both frontend and backend technologies. I excel in building robust web 
              applications with expertise in Node.js, Express.js, MongoDB, MySQL, React.js, JavaScript, 
              TypeScript, CSS, and HTML. Currently learning docker and Kubernetes.
            </p>
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
