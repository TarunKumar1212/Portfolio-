import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='bg-gray-800 shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-6'>
        <h1 className='text-3xl font-bold text-yellow-400 tracking-wider'>
          Tarun Kumar
          <p className="hidden sm:block text-gray-400 text-sm lg:text-base italic">Web Developer</p>
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-white text-lg'>
          <li>
            <Link 
              to="/" 
              className={`transition duration-200 ${location.pathname === "/" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`transition duration-200 ${location.pathname === "/about" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={`transition duration-200 ${location.pathname === "/skills" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`}
            >
              Skills
            </Link>
          </li>
          <li>
          <Link 
              to="/projects" 
              className={`transition duration-200 ${location.pathname === "/projects" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`transition duration-200 ${location.pathname === "/contact" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`}
            >
              Contact
            </Link>
            
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-yellow-400 text-3xl' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.2 }}
        className='md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg p-6'
      >
        <div className='flex justify-end'>
          <button className='text-yellow-400' onClick={() => setMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>

        <ul className='mt-4 space-y-4 text-white text-lg text-center'>
          <li>
            <Link 
              to="/" 
              className={`block transition duration-200 ${location.pathname === "/" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`} 
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`block transition duration-200 ${location.pathname === "/about" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`} 
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={`block transition duration-200 ${location.pathname === "/skills" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`} 
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>

          <li>
          <Link 
              to="/projects" 
              className={`block transition duration-200 ${location.pathname === "/projects" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`} 
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`block transition duration-200 ${location.pathname === "/contact" ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : "hover:text-yellow-400"}`} 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
