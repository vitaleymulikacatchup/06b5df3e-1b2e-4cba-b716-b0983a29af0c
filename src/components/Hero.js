import React from 'react';

const Hero = () => {
  return (
    <section className="hero-bg py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Starbucks <span className="italic">at Home</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Насолоджуйтесь улюбленою кавою Starbucks у затишку власного дому
        </p>
      </div>
    </section>
  );
};

export default Hero;