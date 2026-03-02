import React from 'react';
import Dragon from '../components/Dragon';

const Home = () => {
  return (
    <div className="w-full h-full hidden lg:flex items-center justify-start xl:pl-4 2xl:pl-16 bg-black">
      <Dragon />
    </div>
  );
};

export default Home;
