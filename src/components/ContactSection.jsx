import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#101820] text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Contact <span className="text-[#FEE715]">Me</span>
        </h2>

        <p className="text-lg text-[#A7BEAE] mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Contact items */}
        <div className="space-y-6 mb-12">
          {[
            { icon: <Mail size={24} />, title: 'Email', text: 'atharva.saawant@gmail.com', href: 'mailto:atharva.saawant@gmail.com' },
            { icon: <Phone size={24} />, title: 'Phone', text: '+91 9766632773', href: 'tel:+919766632773' },
            { icon: <MapPin size={24} />, title: 'Location', text: 'Ambernath, India' },
          ].map(({ icon, title, text, href }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-lg bg-[#1c1f26] hover:shadow-lg hover:shadow-[#FEE715]/50 hover:scale-105 transition duration-300"
            >
              <div className="p-3 bg-[#FEE715] text-[#101820] rounded-full">{icon}</div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold">{title}</h4>
                {href ? (
                  <a href={href} className="hover:text-[#A7BEAE] transition block">
                    {text}
                  </a>
                ) : (
                  <p>{text}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Me</h4>
          <div className="flex justify-center gap-4">
            {[
              { href: 'https://linkedin.com', icon: <Linkedin size={24} /> },
              { href: 'https://twitter.com', icon: <Twitter size={24} /> },
              { href: 'https://github.com/athu2773', icon: <Github size={24} /> },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-[#101820] rounded-full hover:bg-[#A7BEAE] hover:shadow-[#FEE715]/50 hover:shadow-lg transition duration-300 transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
