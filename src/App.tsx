import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-50">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Pawan Kuamar Pandit</h1>
            <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
          </div>
        </section>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;