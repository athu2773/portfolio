import React from 'react';
import { GraduationCap, Calendar, Building, MapPin } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const educationData = [
  {
    degree: 'MERN Stack Developer',
    college: 'Masai School',
    location: 'Online',
    duration: 'Present',
    description: 'Completed an intensive, project-based full-stack development program focusing on the MERN stack. Gained hands-on experience in building scalable web applications and strengthening problem-solving skills through real-world challenges.',
  },
  {
    degree: 'Master of Computer Application',
    college: 'K.J.Somaiya Institute Of Management',
    location: 'Mumbai, India',
    duration: '2023 - Present',
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
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#FEE715] mb-2">
            Education
          </h2>
          <span className="block h-1 w-10 bg-[#FEE715] mx-auto rounded" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center gap-12">
          {/* Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#FEE715]/30 z-0" />

          {educationData.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative w-full sm:w-[90%] md:w-3/4 lg:w-2/3"
            >
              {/* Dot */}
              <span className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#101820] border-4 border-[#FEE715] rounded-full z-10" />

              {/* Card */}
              <div className="relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 mt-4 
                hover:bg-[#A7BEAE]/10 transition duration-300 ease-in-out 
                hover:shadow-[0_0_15px_#FEE715]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#FEE715]/10 text-[#FEE715] rounded-md">
                    <GraduationCap size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold">{item.degree}</h3>
                </div>

                <div className="ml-2 space-y-2 text-base text-white/85 mb-3">
                  <div className="flex items-center gap-2">
                    <Building size={18} />
                    <span>{item.college}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <p className="text-white/80 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;