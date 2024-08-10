import React from 'react';

const SkeletonLoader = ({ count }) => {
  return (
    <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-80 gap-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white w-64 gap-96 shadow-xl p-4 rounded-lg space-y-4">
          <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
          <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
          <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
          <div className="flex space-x-4">
            <div className="bg-gray-300 h-8 w-1/3 rounded"></div>
            <div className="bg-gray-300 h-8 w-1/3 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
