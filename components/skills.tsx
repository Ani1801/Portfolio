'use client';

import TiltedCard from './TiltedCard';
import ShinyText from './ShinyText';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Redux'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'REST APIs', 'Firebase', 'Socket.io', 'JWT Auth'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code', 'GitHub', 'npm'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Project Management', 'Mentoring', 'Debugging', 'Testing', 'Performance Optimization', 'Collaboration'],
    },
  ];

  return (
    <section id="skill" className="py-20 bg-black dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <ShinyText text="Tech Stack & Skills" speed={5} color="#ffffff" shineColor="#FF5722" spread={65} />
          </h2>
          <div className="h-1 bg-orange-500 rounded-full animated-underline"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((skillGroup, index) => (
            <TiltedCard
              key={index}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            >
              <div
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors duration-300 w-full h-full"
              >
                <h3 className="text-xl font-bold text-orange-500 mb-6">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <p className="text-gray-300">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TiltedCard>
          ))}
        </div>


      </div>
    </section>
  );
}
