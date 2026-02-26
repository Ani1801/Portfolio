'use client';

import ShinyText from './ShinyText';

export default function Certifications() {
  const certifications = [
    {
      title: 'Oracle AI Foundation Associate',
      issuer: 'Oracle',
      date: '2024',
      description: 'Certification in AI fundamentals and Oracle AI technologies.',
      icon: '🏆',
    },
    {
      title: 'CDAC Certification in MySQL and MongoDB',
      issuer: 'CDAC',
      date: '2024',
      description: 'Professional certification in SQL and NoSQL database management systems.',
      icon: '🗄️',
    },
    {
      title: 'Vibe Coding with Gen AI Training Program',
      issuer: 'Vibe Coding',
      date: '2024',
      description: 'Advanced training in generative AI and modern coding practices.',
      icon: '🤖',
    },
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Multiple Events',
      date: '2023-2024',
      description: 'Recognition for participation and innovation in multiple hackathon competitions.',
      icon: '🏅',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-black dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <ShinyText text="Certifications" speed={5} color="#ffffff" shineColor="#FF5722" spread={65} />
          </h2>
          <div className="h-1 bg-orange-500 rounded-full animated-underline"></div>
        </div>

        {/* Certifications Grid */}
        <div className="">
          <h3 className="text-2xl font-bold text-white mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                <p className="text-orange-500 font-semibold text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
