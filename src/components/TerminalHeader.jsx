import React, { useState, useEffect } from 'react';

const TerminalHeader = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center px-4 py-2 text-xs sm:text-sm tracking-wide bg-transparent">
      <div className="flex flex-col sm:flex-row flex-1 justify-end sm:space-x-6 gap-1 lg:gap-0 items-end sm:items-center">
        <span>
          <span className="text-gray-400">SERVER TIME:</span>{' '}
          <span className="text-white ml-1">{time}</span>
        </span>
        <span>
          <span className="text-gray-400">LOCAL TIME:</span>{' '}
          <span className="text-white ml-1">{time}</span>
        </span>
      </div>
    </div>
  );
};

export default TerminalHeader;
