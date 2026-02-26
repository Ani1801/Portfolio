'use client';

import ShinyText from './ShinyText';
import TiltedCard from './TiltedCard';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI-Driven Streaming Platform',
      description: 'A scalable Full Stack solution with AI-powered chatbots and recommendation engines to boost engagement.',
      tech: ['Node.js', 'React', 'MongoDB', 'AI'],
      category: 'Solo Project',
      image: '/primevision.png',
      link: null,
    },
    {
      role: 'Full Stack Developer Intern',
      title: 'Revino.in',
      description: 'Architected reusable UI component libraries and integrated secure RESTful APIs for high-traffic websites.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      category: 'Internship Work',
      image: '/revino.png',
      link: 'https://revino.in',
    },
    {
      role: 'Full Stack Developer Intern',
      title: 'Miragix.com',
      description: 'Developed and optimized AI-driven features for enhancing business intelligence and automation.',
      tech: ['React.js', 'Node.js', 'Express', 'AI/ML'],
      category: 'Internship Work',
      image: '/miragix.png',
      link: 'https://miragix.com',
    },
    {
      role: 'Full Stack Developer Intern',
      title: 'Easlegal.com',
      description: 'Redesigned the company website using modern UI/UX principles for improved performance and responsiveness.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Figma'],
      category: 'Internship Work',
      image: '/easlegal.png',
      link: 'https://easlegal.com',
    },
    {
      title: 'Crowdsourced Issue Reporting Platform',
      description: 'Real-time civic application for issue tracking, developed for Smart India Hackathon (SIH 2024).',
      tech: ['MERN Stack', 'Redux', 'Socket.io', 'Leaflet'],
      category: 'SIH 2024 Project',
      image: '/placeholder.jpg',
      link: null,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
                <ShinyText text="My Works" speed={5} color="#ffffff" shineColor="#FF5722" spread={65} />
                <br />
                <span className="text-orange-500 font-bold italic">& Projects</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed">
              A curated selection of my professional internship experiences and high-impact personal projects.
            </p>
          </div>
          <div className="h-1.5 bg-orange-500 rounded-full animated-underline w-48"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col space-y-6 group">
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="350px"
                containerWidth="100%"
                imageHeight="350px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showTooltip={false}
                displayOverlayContent={false}
              />

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] rounded-full font-black uppercase tracking-widest">
                        {project.category}
                      </span>
                      {project.role && (
                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                          {project.role}
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-black text-white group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 p-2.5 bg-gray-900 border border-white/5 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300 shadow-xl"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>

                <p className="text-gray-400 text-base leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-lg font-semibold group-hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
