import React from 'react';

const Projects = () => {
  const projects = [
     {
      title: 'Advanced Stock Trend Predictor',
      desc: 'Machine learning–based system for analyzing stock trends using historical market data and technical indicators. Provides short- and long-term trend insights through an interactive interface.',
      tech: ['Python', 'Pandas', 'Scikit Learn'],
      link: 'https://advancedstocktrendpredictor-vwuzsargxd4jvxfvvorjct.streamlit.app/',
    },
    {
      title: 'Portfolio',
      desc: 'An interactive portfolio with RPG elements, quests, and a retro UI.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://arjavdariya.vercel.app/',
    },
    {
      title: 'Mern Stack Expense Tracker',
      desc: 'A full stack expense tracker with user authentication and real-time updates.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/Arjavv/MERN-EXPENSE-TRACKER',
    },
    {
      title: 'CoffeeShop UI',
      desc: 'Figma prototype for a modern coffee ordering app.',
      tech: ['Figma', 'UX Design'],
      link: 'https://www.figma.com/proto/2aw3eatbdbNLN2B8IyB06l/Coffee?page-id=0%3A1&node-id=88-86&viewport=687%2C24%2C0.3&t=HIitneK9xXF0TDc3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A820',
    },
   

  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-white font-iceland">
      <h1 className="text-3xl text-red-500 tracking-widest border-b border-red-500 pb-2 mb-6">
        /PROJECTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black border border-red-500 p-4 shadow-red-500/30 shadow-lg hover:shadow-red-500/60 transition-all duration-300"
          >
            <h2 className="text-xl text-red-400 font-bold tracking-wide mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-300 mb-3">{project.desc}</p>
            <div className="flex flex-wrap gap-2 text-xs text-red-300">
              {project.tech.map((t, i) => (
                <span key={i} className="border border-red-500 px-2 py-0.5 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 border border-red-500 px-3 py-1 text-sm text-red-300 hover:bg-red-500 hover:text-black transition-colors duration-200"
            >
              Visit Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
