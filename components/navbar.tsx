'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skill', id: 'skill' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Connect', href: '#connect', id: 'connect' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 flex items-center justify-between gap-8 max-w-fit shadow-2xl shadow-orange-500/10 transition-all duration-300 hover:border-white/20">
        {/* Logo */}
        <button
          onClick={() => {
            setActiveLink('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold text-white hover:text-orange-500 transition-colors duration-200"
        >
          AY<span className="text-orange-500">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap px-2 py-1 rounded-full ${activeLink === link.id
                ? 'text-orange-500 bg-orange-500/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
          <a
            href="/resume.pdf"
            download="Aniruddha_Yeole_Resume.pdf"
            className="px-5 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/40 active:scale-95 whitespace-nowrap"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-0 z-[-1] bg-black/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-screen space-y-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setIsMenuOpen(false);
              }}
              className={`text-3xl font-bold transition-colors duration-200 ${activeLink === link.id ? 'text-orange-500' : 'text-white'
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Aniruddha_Yeole_Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
