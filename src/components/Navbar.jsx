import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import resumeAsset from '../assets/AtharvaSawant.pdf';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];
  const resumeLink = resumeAsset;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#101820] shadow-md py-3' : 'bg-[#101820] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-xl font-semibold text-white">
            Atharva <span className="text-[#FEE715] font-bold">Sawant</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:text-[#A7BEAE] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-[#101820] font-medium bg-[#FEE715] px-3 py-1 rounded-md hover:bg-[#A7BEAE] transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#A7BEAE] focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-[#101820] rounded-md shadow px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white font-medium hover:text-[#A7BEAE]"
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#101820] font-medium bg-[#FEE715] px-3 py-2 rounded-md text-center hover:bg-[#A7BEAE]"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
