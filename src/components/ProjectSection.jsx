import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'Opencart.com',
    description:
      'An OpenCart clone is a custom-built eCommerce platform inspired by the original OpenCart system, replicating its core features like product management, order processing, and multi-store support. It offers a lightweight, modular structure ideal for developers looking to create scalable online stores with customizable design and functionality.',
    image: 'data:image/jpeg;base64,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',
    tags: ['Html','CSS','Json-Server'],
    demoLink: 'https://opencartclone.netlify.app/',
    githubLink: 'https://github.com/athu2773/Open_Cart_Clone',
  },
  {
    title:'Booking.Pro',
    description:
      'Booking.pro is a comprehensive online booking platform designed to streamline appointment scheduling, reservations, and service management for businesses across industries. It offers user-friendly tools for clients to book services in real-time, while providing businesses with automated notifications, calendar integration, and advanced analytics for efficient operations.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1974&auto=format&fit=crop',
    tags: ['HTML','CSS','Javascript','Postman','FireBase'],
    demoLink: 'https://bookingpro.netlify.app/',
    githubLink: 'https://github.com/jasminekeshari/Booking.Pro',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#101820] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FEE715] mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#101820] border border-[#FEE715] rounded-xl overflow-hidden flex flex-col shadow-md transform transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_#FEE715]"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-white">
                  <Code size={28} className="text-[#FEE715]" />
                  {project.title}
                </h3>
                <p className="text-white text-base mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#FEE715] text-black text-sm font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 flex-wrap">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-[#FEE715] rounded-md hover:bg-[#A7BEAE] hover:text-black transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#FEE715] border border-[#FEE715] rounded-md hover:bg-[#A7BEAE] hover:text-black transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
