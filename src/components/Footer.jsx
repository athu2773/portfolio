import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101820] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-3">
              Atharva <span className="text-[#FEE715]">Sawant</span>
            </h2>
            <p className="text-white/70 text-sm">
              &copy; {currentYear} Atharva Sawant. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-white w-full md:w-auto">
            <div className="hover:bg-[#A7BEAE]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#FEE715]">
              <h4 className="font-semibold text-[#FEE715] mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-[#A7BEAE] transition-colors">Home</a></li>
                <li><a href="#education" className="hover:text-[#A7BEAE] transition-colors">Education</a></li>
                <li><a href="#projects" className="hover:text-[#A7BEAE] transition-colors">Projects</a></li>
              </ul>
            </div>

            <div className="hover:bg-[#A7BEAE]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#FEE715]">
              <h4 className="font-semibold text-[#FEE715] mb-3">More</h4>
              <ul className="space-y-2">
                <li><a href="#skills" className="hover:text-[#A7BEAE] transition-colors">Skills</a></li>
                <li><a href="#github" className="hover:text-[#A7BEAE] transition-colors">GitHub</a></li>
                <li><a href="#contact" className="hover:text-[#A7BEAE] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="hover:bg-[#A7BEAE]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#FEE715]">
              <h4 className="font-semibold text-[#FEE715] mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/in/atharva-sawant-35626a209/" className="hover:text-[#A7BEAE] transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/athu2773" className="hover:text-[#A7BEAE] transition-colors">GitHub</a></li>
                <li><a href="https://x.com/ATHARVASAW2773" className="hover:text-[#A7BEAE] transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm flex items-center">
            Built with <Heart size={16} className="mx-1 text-red-500" /> by Atharva Sawant
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-[#101820] border border-[#FEE715] text-[#FEE715] hover:bg-[#A7BEAE]/10 hover:shadow-[0_0_15px_#FEE715] rounded-full transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
