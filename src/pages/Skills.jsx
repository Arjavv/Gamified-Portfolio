import React from 'react';

const skills = {
  'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express.js', 'MongoDB'],
  'Tools': ['Figma', 'Git', 'GitHub', 'Vite', 'Postman'],
  'Languages': ['C/C++', 'JavaScript', 'Python'],
  'AI & Productivity Tools': ['ChatGPT', 'GitHub Copilot', 'Cursor IDE'],
};

const Skills = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-white font-iceland overflow-hidden">
      <h1 className="text-3xl text-red-500 tracking-widest border-b border-red-500 pb-2 mb-6">
        /SKILLS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list], index) => (
          <div
            key={index}
            className="bg-black border border-red-500 p-4 shadow-red-500/30 shadow-lg hover:shadow-red-500/60 transition-all duration-300"
          >
            <h2 className="text-xl text-red-400 font-bold tracking-wide mb-3">
              {category}
            </h2>
            <ul className="space-y-1 text-gray-300">
              {list.map((skill, idx) => (
                <li key={idx} className="border-b border-zinc-800 pb-1">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
