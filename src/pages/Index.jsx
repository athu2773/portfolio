import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import GithubStatsSection from '../components/GithubStatsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection/>
      <EducationSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <GithubStatsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Index;
