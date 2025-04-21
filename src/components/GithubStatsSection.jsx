import React, { useEffect, useState } from 'react';
import { Github, BarChart2, Code2, Calendar } from 'lucide-react';
import axios from 'axios';

const GITHUB_USERNAME = 'athu2773';

const GithubStatsSection = () => {
  const [githubData, setGithubData] = useState({
    contributions: 0,
    repositories: 0,
    streak: 0,
    stats: {},
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const repoRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const eventsRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`);

        const today = new Date().toISOString().split('T')[0];
        const streak = eventsRes.data.filter(event => event.created_at.split('T')[0] === today).length;

        setGithubData({
          contributions: eventsRes.data.length,
          repositories: repoRes.data.length,
          streak,
          stats: userRes.data,
        });
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-16 md:py-24 bg-[#101820] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          GitHub <span className="text-[#FEE715]">Statistics</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mb-12">
          <Github size={22} className="text-[#FEE715]" />
          <h3 className="text-xl font-medium">@{GITHUB_USERNAME}</h3>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <BarChart2 className="text-[#FEE715]" />,
              label: 'Contributions',
              value: githubData.contributions,
              subtext: '+127 this month',
            },
            {
              icon: <Code2 className="text-[#FEE715]" />,
              label: 'Repositories',
              value: githubData.repositories,
              subtext: 'Public and private repositories',
            },
            {
              icon: <Calendar className="text-[#FEE715]" />,
              label: 'Streak',
              value: githubData.streak,
              subtext: 'Days of consecutive coding',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1c1f26] rounded-xl border border-gray-700 transition-all duration-300 transform hover:shadow-[0_0_12px_4px_#FEE715] hover:border-[#A7BEAE] hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
              <p className="text-3xl font-bold text-[#FEE715]">{item.value}</p>
              <p className="text-sm text-[#A7BEAE] mt-1">{item.subtext}</p>
            </div>
          ))}
        </div>

        {/* GitHub Stats Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#1c1f26] rounded-xl border border-gray-700 hover:shadow-[0_0_12px_4px_#FEE715] transition-all duration-300 hover:border-[#A7BEAE] hover:scale-105">
            <h4 className="text-md font-semibold mb-4 text-[#FEE715]">GitHub Streak</h4>
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=athu2773&theme=tokyonight"
              alt="GitHub Streak"
              className="w-full rounded"
            />
          </div>

          <div className="p-6 bg-[#1c1f26] rounded-xl border border-gray-700 hover:shadow-[0_0_12px_4px_#FEE715] transition-all duration-300 hover:border-[#A7BEAE] hover:scale-105">
            <h4 className="text-md font-semibold mb-4 text-[#FEE715]">Top Languages</h4>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=athu2773&layout=compact&theme=tokyonight"
              alt="Top Languages"
              className="w-full rounded"
            />
          </div>
        </div>

        {/* GitHub Summary Stats */}
        <div className="mb-12">
          <img
            src="https://github-readme-stats.vercel.app/api?username=athu2773&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="w-full max-w-3xl mx-auto rounded shadow-md"
          />
        </div>

        {/* GitHub Button */}
        <div className="text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FEE715] text-[#101820] hover:bg-[#A7BEAE] hover:text-[#101820] px-6 py-3 rounded-md text-sm font-medium transition duration-300"
          >
            <Github size={18} />
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStatsSection;
