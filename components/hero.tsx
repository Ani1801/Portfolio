'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const handleHireMe = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:yeoleaniruddha2006@gmail.com';
  };

  return (
    <section id="home" className="h-[100dvh] w-full bg-black dark relative overflow-hidden flex items-center justify-center py-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 sm:-right-96 sm:-top-96 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-orange-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -left-20 -bottom-20 sm:-left-96 sm:-bottom-96 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-orange-500/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Available for hire
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1] tracking-tight">
                Full Stack<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Developer</span>
              </h1>

              <p className="text-sm sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Specializing in <span className="text-white">React</span>, <span className="text-white">Node.js</span>, and <span className="text-white">Cloud Architectures</span> to build high-performance, scalable web solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleHireMe}
                className="group relative px-8 py-3 sm:px-10 sm:py-4 bg-orange-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/50 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Hire me</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <a
                href="/resume.pdf"
                download="Aniruddha_Yeole_Resume.pdf"
                className="group px-8 py-3 sm:px-10 sm:py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                Resume
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Tech Stack Pills (Quick view) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 opacity-60">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map((tech) => (
                <span key={tech} className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Visuals */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[450px] aspect-square flex items-center justify-center">
              {/* Decorative Glows */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-[80px] animate-pulse"></div>

              {/* Floating Tech Icons */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gray-900/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center text-orange-500 shadow-xl shadow-orange-500/10 animate-float pointer-events-none z-20">
                <span className="font-bold text-xs">React</span>
              </div>
              <div className="absolute bottom-10 left-0 w-14 h-14 bg-gray-900/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center text-orange-500 shadow-xl shadow-orange-500/10 animate-float-delayed pointer-events-none z-20">
                <span className="font-bold text-xs">Next.js</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gray-900/80 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center text-orange-500 shadow-xl shadow-orange-500/10 animate-float pointer-events-none z-20">
                <span className="font-bold text-[10px]">TS</span>
              </div>

              {/* Main Avatar */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/developer.png"
                  alt="Developer Avatar"
                  width={500}
                  height={500}
                  className="w-4/5 h-auto object-contain drop-shadow-[0_0_50px_rgba(255,87,34,0.3)] hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}