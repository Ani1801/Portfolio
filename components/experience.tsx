'use client';

import StarBorder from './StarBorder';
import ShinyText from './ShinyText';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'EasLegal Partners',
      duration: 'Dec 2025 - Present',
      bullets: [
        'Redesigned company website with modern UI/UX principles and responsive design',
        'Managed end-to-end full-stack development including frontend, backend, and database',
        'Optimized performance and fixed bugs to ensure scalable, stable applications',
      ],
      highlights: ['Full Stack Development', 'UI/UX Design', 'Responsive Design', 'Performance Optimization'],
    },
    {
      role: 'Software Developer Intern',
      company: 'Revino',
      duration: 'Feb 2025 - May 2025',
      bullets: [
        'Developed two high-traffic client websites with secure RESTful APIs',
        'Architected reusable UI component library using React.js and TypeScript',
        'Achieved 40% increase in user engagement with 100% responsiveness',
      ],
      highlights: ['React.js', 'TypeScript', 'RESTful APIs', 'UI Components'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Mernix Consulting',
      duration: '14 Jan 26 - 13 Feb 26',
      bullets: [
        'Developed responsive frontend components using React.js',
        'Built and maintained backend services using Node.js and Express.js',
        'Debugged, tested, and enhanced application functionality',
      ],
      highlights: ['React.js', 'Node.js', 'Express.js', 'Testing & Debugging'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <ShinyText text="Experience & Internships" speed={5} color="#ffffff" shineColor="#FF5722" spread={65} />
          </h2>
          <div className="h-1 bg-orange-500 rounded-full animated-underline"></div>
        </div>

        {/* Timeline (Dots and Line Removed) */}
        <div className="relative">
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <StarBorder color="#FF5722" speed="6s" className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-orange-500 font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

                    {/* Bullet Points */}
                    <ul className="text-gray-300 mb-4 space-y-2">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex gap-3">
                          <span className="text-orange-500 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs rounded-full font-semibold"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </StarBorder>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
