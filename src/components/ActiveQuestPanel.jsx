import React from 'react';
import { Check, X, Settings } from 'lucide-react';
import rewardIcon1 from '../assets/reward1.png';
import rewardIcon2 from '../assets/reward2.png';

const ActiveQuestPanel = () => {
  return (
    <div className="relative w-full h-auto border-t lg:border-t-0 border-l-0 lg:border-l lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[350px] bg-black/70 text-gray-200 border-red-500 p-6 font-iceland z-20 overflow-y-auto">
      {/* Header */}
      <h2 className="text-red-500 font-bold text-2xl tracking-widest flex items-center gap-2">
        ACTIVE QUEST <span className="border border-red-500 px-1 rounded-sm scale-75">🛡</span>
      </h2>

      {/* Title */}
      <p className="bg-zinc-900 text-base tracking-wide py-1 px-2 mt-2 border-l-2 border-red-500">
        TECHNICAL DEPTH PROGRESSION
      </p>

      {/* Subtitle */}
      <h3 className="mt-4 font-bold text-2xl text-white">
        BACKEND & <span className="text-red-500">DSA MASTERY</span>
      </h3>

      {/* Goal Section */}
      <div className="mt-4">
        <h4 className="text-sm text-gray-400 tracking-widest font-bold">GOAL</h4>
        <p className="text-base mt-1 leading-snug">
          Train in data structures and algorithms to sharpen problem-solving skills.
          Simultaneously level up backend development using Node.js, Express, MongoDB,
          and authentication. Unlock the power of APIs, servers, and optimized logic!
        </p>
      </div>

      {/* Rewards */}
      <div className="mt-4">
        <h4 className="text-sm text-gray-400 tracking-widest font-bold">REWARDS</h4>
        <div className="flex gap-4 mt-2 items-center">
          <div className="flex flex-col items-center">
            <img src={rewardIcon1} alt="XP" className="h-8" />
            <span className="text-sm mt-1">+5</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={rewardIcon2} alt="Skill" className="h-8" />
            <span className="text-sm mt-1">+25</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Toggles */}
      {/* <div className="absolute bottom-6 right-6 space-y-4 text-sm w-[90%]">
        <div className="flex justify-between items-center border border-red-500 px-2 py-1">
          <span className="text-red-500">DARK MODE</span>
          <Check size={18} className="text-red-500" />
        </div>
        <div className="flex justify-between items-center border border-red-500 px-2 py-1">
          <span className="text-red-500">MUSIC</span>
          <X size={18} className="text-red-500" />
        </div>
        <div className="flex justify-between items-center border border-red-500 px-2 py-1">
          <span className="text-red-500">VISUAL SETTINGS</span>
          <Settings size={18} className="text-red-500" />
        </div>
      </div> */}
    </div>
  );
};

export default ActiveQuestPanel;
