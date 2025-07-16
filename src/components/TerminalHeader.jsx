import React from 'react';

const TerminalHeader = () => {
  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
  };

  return (
  <div className="flex items-center px-4 py-2 text-sm tracking-wide bg-transparent">
    <div className="flex flex-1 justify-end space-x-6">
        <span>
          <span className="text-gray-400">SERVER TIME:</span>{' '}
          <span className="text-white ml-1">{getTime()}</span>
        </span>
        <span>
          <span className="text-gray-400">LOCAL TIME:</span>{' '}
          <span className="text-white ml-1">{getTime()}</span>
        </span>
      </div>
    </div>
  );
};

export default TerminalHeader;
