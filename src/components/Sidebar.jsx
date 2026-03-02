// src/components/Sidebar.jsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg'; // Replace with your actual image
import Dragon from './Dragon';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-[320px] h-auto lg:min-h-screen bg-black text-white border-b lg:border-r border-red-600 px-6 py-6 lg:py-8 font-iceland flex flex-col">
      {/* Profile Image */}
      <div className="w-50 h-40 mx-auto border-2 border-red-600 p-1 mb-6 overflow-hidden order-1 lg:order-none">
        <img
          src={profileImg}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Identity Section */}
      <div className="mb-6 order-2 lg:order-none">
        <h3 className="text-l tracking-widest text-gray-400">IDENTITY</h3>
        <p className="text-2xl font-bold text-red-500">ARJAV DARIYA</p>
      </div>

      <div className="mb-6 order-3 lg:order-none">
        <h3 className="text-l tracking-widest text-gray-400">DEPLOYED AS</h3>
        <p className="text-2xl font-bold text-red-500">WEB DEV + UI/UX + M.L.</p>
      </div>

      <div className="mb-6 order-4 lg:order-none">
        <h3 className="text-l tracking-widest text-gray-400">ARCHETYPE</h3>
        <p className="text-2xl font-bold text-red-500">SOLO NODE</p>
      </div>

      <div className="mb-6 order-5 lg:order-none">
        <h3 className="text-l tracking-widest text-gray-400">CURRENT STATE</h3>
        <div className="flex justify-between items-center bg-red-700 px-3 py-1 mt-1">
          <span className="text-lg font-bold tracking-wider">OPEN FOR HIRE</span>
          <span className="text-xl font-bold">🛡️</span> {/* or insert svg */}
        </div>
      </div>

      {/* Dragon Image on Mobile */}
      <div className="w-full mb-6 order-6 lg:order-none lg:hidden flex justify-center items-center overflow-hidden min-h-[300px]">
        <Dragon />
      </div>

      {/* Network Links */}
      <div className="mb-6 order-7 lg:order-none">
        <h3 className="text-l tracking-widest text-gray-400 mb-2">NETWORK</h3>
        <a
          href="https://github.com/Arjavv"
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center border-2 border-red-600 px-3 py-2 mb-3 hover:bg-red-600"
        >
          <span className="text-xl font-bold text-red-500">GITHUB</span>
          <FaGithub className="text-2xl text-red-500" />
        </a>

        <a
          href="https://www.linkedin.com/in/arjavdariya/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center border-2 border-red-600 px-3 py-2 hover:bg-red-600"
        >
          <span className="text-xl font-bold text-red-500">LINKEDIN</span>
          <FaLinkedin className="text-2xl text-red-500" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;