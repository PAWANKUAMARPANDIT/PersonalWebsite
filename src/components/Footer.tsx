import React from 'react';
import { Mail, Github, Phone, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use 'container' for better responsiveness */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Stack icons vertically on mobile */}
            <a
              href="mailto:pawanpandit9834@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/PAWANKUAMARPANDIT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="tel:+916291317019"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone size={24} />
              <span>Phone</span>
            </a>
            <a
              href="https://twitter.com/PawanPa98011176"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter size={24} />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pawan-kuamar-pandit-595676176/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pawan Kuamar Pandit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
