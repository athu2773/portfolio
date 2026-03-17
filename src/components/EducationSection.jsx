import React from 'react';
import { GraduationCap, Calendar, Building, MapPin } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const educationData = [
  {
    degree: 'MERN Stack Developer',
    college: 'Masai School',
    location: 'Online',
    duration: '2024 - 2025',
    description: 'Completed an intensive, project-based full-stack development program focusing on the MERN stack. Gained hands-on experience in building scalable web applications and strengthening problem-solving skills through real-world challenges.',
  },
  {
    degree: 'Master of Computer Application',
    college: 'K.J.Somaiya Institute Of Management',
    location: 'Mumbai, India',
    duration: '2023 - 2025',
    description: 'Pursuing MCA with a specialization in AI/ML, diving deep into neural networks, data science, and intelligent systems. Currently working on a thesis exploring the integration of neural networks in modern web applications.',
  },
  {
    degree: 'Bachelor of Science in IT',
    college: 'B.K.Birla College',
    location: 'Kalyan, India',
    duration: '2020 - 2023',
    description: 'Graduated with honors in IT, gaining strong foundations in software engineering, databases, and web development. Worked on academic projects using HTML, CSS, JavaScript, and PHP.',
  },
  {
    degree: 'HSC',
    college: 'New English High school And Jr college',
    location: 'Online',
    duration: '2018-2020',
    description: 'Opted for the Science stream and discovered a strong interest in Information Technology. This period helped me build analytical thinking and explore the basics of coding and computers.',
  },
  {
    degree: 'SSC',
    college: 'Lok Nagari Public School',
    location: 'Ambernath India',
    duration: '2017-2018',
    description: 'Developed a strong interest in science and participated actively in academics and sports. Early exposure to technology here sparked my passion for computers and problem-solving.',
  },
];
const EducationSection = () => {
  return (
    <section id="education" className="bg-[#101820] text-white py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-4">Education</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Academic milestones and certifications that showcase growth in full-stack development, systems thinking, and engineering best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <Motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 45px rgba(254,231,21,0.25)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-[#FEE715]/30 bg-[#101820] p-6 backdrop-blur-xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-4 h-10 w-10 rounded-full bg-[#FEE715] flex items-center justify-center shadow-lg">
                <GraduationCap size={20} className="text-[#101820]" />
              </div>

              <div className="ml-12">
                <h3 className="text-2xl font-bold text-[#FEE715] mb-2">{item.degree}</h3>
                <p className="text-white/90 font-semibold">{item.college}</p>
                <p className="text-sm text-white/70 mb-4">{item.location} • {item.duration}</p>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;