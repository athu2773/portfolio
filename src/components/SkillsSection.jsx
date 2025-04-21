import React from 'react';
import 'devicon/devicon.min.css';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
      { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'Next.js', iconClass: 'devicon-nextjs-original' },
      { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },
      { name: 'Chakra UI', iconClass: 'devicon-react-original colored' }, // Placeholder
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'Express', iconClass: 'devicon-express-original' },
      { name: 'Java', iconClass: 'devicon-java-plain colored' },
      { name: 'PHP', iconClass: 'devicon-php-plain colored' },
      { name: 'Python', iconClass: 'devicon-python-plain colored' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
      { name: 'Firebase', iconClass: 'devicon-firebase-plain colored' },
      { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', iconClass: 'devicon-git-plain colored' },
      { name: 'GitHub', iconClass: 'devicon-github-original' },
      { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
      { name: 'Postman', iconClass: 'devicon-postman-plain colored' }, // Might be a placeholder
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#101820] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FEE715] mb-12">
          My Skills
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-6 text-[#FEE715] border-b-2 inline-block border-[#FEE715]">
                {category.name}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center p-4 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#FEE715] bg-[#101820]"
                  >
                    <i
                      className={`${skill.iconClass} text-5xl transition-all duration-300 group-hover:scale-110 hover:text-[#A7BEAE]`}
                    />
                    <span className="text-sm mt-3 text-white hover:text-[#A7BEAE] transition duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
