'use client';

import SpotlightCard from './SpotlightCard';
import ShinyText from './ShinyText';

export default function About() {
  return (
    <section id="about" className="min-h-[100dvh] flex items-center py-16 sm:py-24 bg-black dark border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3">
            <ShinyText text="About Me" speed={5} color="#ffffff" shineColor="#FF5722" spread={65} />
          </h2>
          <div className="h-1 bg-orange-500 rounded-full animated-underline w-24"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-white font-bold">Full-Stack Engineer</span> specialized in architecting scalable <span className="text-orange-500 font-bold">MERN</span> applications and integrating <span className="text-white font-bold">AI-driven insights</span> to solve complex user problems. With a strong command of <span className="text-white font-bold">React</span>, <span className="text-white font-bold">Node.js</span>, <span className="text-white font-bold">TypeScript</span>, and <span className="text-white font-bold">AWS</span>, I build production-grade solutions that bridge the gap between robust backend logic and intuitive frontend design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond traditional development, I leverage my <span className="text-white font-bold">Oracle Cloud Infrastructure AI Associate</span> certification to build intelligent applications. By integrating machine learning models like <span className="text-white font-bold">K-Means</span> and <span className="text-white font-bold">PCA</span>, I've optimized user segmentation and improved data-driven decision-making in real-world scenarios.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">Top 35</p>
                <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Hackathon Finalist</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">OCI AI</p>
                <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Certified Associate</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">4+ Months</p>
                <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Production Experience</p>
              </div>
            </div>

            <a href="#skill" className="text-orange-500 font-bold flex items-center gap-2 pt-4 group cursor-pointer w-fit">
              <span>Let's build something together</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right Column - Quick Facts */}
          <SpotlightCard spotlightColor="rgba(255, 87, 34, 0.25)" className="rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Execution & Impact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shadow-[0_0_10px_rgba(255,87,34,1)]"></div>
                <div>
                  <p className="text-white font-bold">Production-Grade Engineering</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Engineered production-grade UI at <span className="text-orange-500 font-semibold">Revino</span> using React and Tailwind, contributing to <span className="text-white">scalable front-end architecture</span> that increased user engagement.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shadow-[0_0_10px_rgba(255,87,34,1)]"></div>
                <div>
                  <p className="text-white font-bold">Elite Competitive Edge</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Outperformed <span className="text-orange-500 font-semibold">500+ participants</span> to secure a Top 35 spot in the Hackbuild Hackathon.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shadow-[0_0_10px_rgba(255,87,34,1)]"></div>
                <div>
                  <p className="text-white font-bold">AI-FullStack Hybrid</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bridging the gap between <span className="text-white">Robust Web Systems</span> and <span className="text-white">Intelligent Data Insights</span> using Oracle AI foundations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shadow-[0_0_10px_rgba(255,87,34,1)]"></div>
                <div>
                  <p className="text-white font-bold">Scalable Architecture</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Focused on writing clean, performant code in <span className="text-white">TypeScript</span> that prioritizes <span className="text-orange-500 font-semibold">long-term maintainability</span>.
                  </p>
                </div>
              </li>
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
