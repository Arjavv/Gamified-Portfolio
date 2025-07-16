// src/components/Sidebar.jsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg'; // Replace with your actual image

const Sidebar = () => {
  return (
    <div className="w-full sm:w-[320px] min-h-screen bg-black text-white border-r border-red-600 px-6 py-8 font-iceland">
      {/* Profile Image */}
<div className="w-50 h-40 mx-auto border-2 border-red-600 p-1 mb-6 overflow-hidden">
  <img
    src={profileImg}
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>

      {/* Identity Section */}
      <div className="mb-6">
        <h3 className="text-l tracking-widest text-gray-400">IDENTITY</h3>
        <p className="text-2xl font-bold text-red-500">ARJAV DARIYA</p>
      </div>

      <div className="mb-6">
        <h3 className="text-l tracking-widest text-gray-400">DEPLOYED AS</h3>
        <p className="text-2xl font-bold text-red-500">WEB DEVELOPER + UI/UX</p>
      </div>

      <div className="mb-6">
        <h3 className="text-l tracking-widest text-gray-400">ARCHETYPE</h3>
        <p className="text-2xl font-bold text-red-500">SOLO NODE</p>
      </div>

      <div className="mb-6">
        <h3 className="text-l tracking-widest text-gray-400">CURRENT STATE</h3>
        <div className="flex justify-between items-center bg-red-700 px-3 py-1 mt-1">
          <span className="text-lg font-bold tracking-wider">OPEN FOR HIRE</span>
          <span className="text-xl font-bold">🛡️</span> {/* or insert svg */}
        </div>
      </div>

      {/* Network Links */}
      <div className="mb-6">
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