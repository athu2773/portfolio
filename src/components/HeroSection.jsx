import React from "react";
import { Download, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion as Motion } from "framer-motion";
import ProfileImage from "../image/pp-199200.png";
import ResumePDF from "../assets/AtharvaSawant.pdf";

const HeroSection = () => {
  const handleResumeClick = () => {
    // Open in new tab
    window.open(ResumePDF, "_blank", "noopener,noreferrer");

    // Trigger download
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.setAttribute("download", "Atharva_Sawant_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 bg-[#101820] text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-coding-on-laptop-1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[#101820]/90 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <Motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#FEE715] font-semibold text-lg mb-2"
          >
            Hello, I'm
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Atharva Sawant
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl text-white mb-6"
            />
          </Motion.div>

          <Motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-white/80 mb-6 max-w-xl mx-auto lg:mx-0"
          >
            I craft responsive websites where technology meets creativity.
            Passionate about building software that improves lives.
          </Motion.p>

          {/* Social Icons */}
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex gap-4 justify-center lg:justify-start mb-6"
          >
            <a
              href="https://github.com/athu2773"
              className="hover:text-[#A7BEAE] transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharva-sawant-35626a209/"
              className="hover:text-[#A7BEAE] transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/ATHARVASAW2773"
              className="hover:text-[#A7BEAE] transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </Motion.div>

          {/* Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-5 py-3 bg-[#FEE715] hover:bg-[#A7BEAE] text-[#101820] font-medium rounded-md shadow transition-all"
            >
              <Download size={18} />
              Download Resume
            </Motion.button>

            <Motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 border border-[#FEE715] text-[#FEE715] hover:bg-[#A7BEAE] hover:text-[#101820] font-medium rounded-md transition-all"
            >
              <Send size={18} />
              Contact Me
            </Motion.a>
          </Motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 rounded-full overflow-hidden shadow-[0_0_30px_#FEE715] z-10">
            <img
              src={ProfileImage}
              alt="Atharva Sawant"
              className="w-full object-cover mix-blend-lighten brightness-110 saturate-125 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <Motion.div
        className="absolute bottom-6 text-white/70 text-sm z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Scroll Down ↓
      </Motion.div>
    </section>
  );
};

export default HeroSection;
