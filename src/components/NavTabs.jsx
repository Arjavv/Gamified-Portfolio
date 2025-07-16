import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Beyond Academics', path: '/beyond-academics' },
  { name: 'About', path: '/about' },
];

const NavTabs = () => {
  return (
    <nav className="w-full border-t border-red-500 bg-zinc-950 flex justify-center gap-4 py-2 font-iceland text-sm tracking-widest z-30">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `px-4 py-1 border border-red-500 rounded-sm hover:bg-red-500/20 hover:text-white transition-all duration-200 ${
              isActive ? 'bg-red-600 text-white' : 'text-red-400'
            }`
          }
        >
          {tab.name.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavTabs;
