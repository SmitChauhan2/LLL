// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the assets folder

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
              <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-100 mr-2" />
              </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact" className="flex items-center space-x-1">
            <span>Contact Us</span>
            <FaWhatsapp />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/service1" className="block px-4 py-2">Service 1</Link>
          <Link to="/service2" className="block px-4 py-2">Service 2</Link>
          <Link to="/work" className="block px-4 py-2">Work</Link>
          <Link to="/blog" className="block px-4 py-2">Blog</Link>
          <Link to="/about" className="block px-4 py-2">About Us</Link>
          <Link to="/contact" className="block px-4 py-2 flex items-center space-x-1">
            <span>Contact Us</span>
            <FaWhatsapp />
          </Link>
        </div>
      )}
    </nav>
  )
}
