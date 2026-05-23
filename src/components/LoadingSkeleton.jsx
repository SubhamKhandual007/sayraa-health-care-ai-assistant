import React from 'react';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  // Skeleton animation styles
  const shimmerClass = "animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%]";

  const renderSkeleton = () => {
    switch (type) {
      case 'chat':
        return (
          <div className="space-y-4">
            {[...Array(count)].map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[70%] rounded-2xl p-4 ${i % 2 === 0 ? 'bg-gray-700' : 'bg-indigo-600'}`}>
                  <div className={`h-4 ${shimmerClass} rounded w-48 mb-2`}></div>
                  <div className={`h-3 ${shimmerClass} rounded w-32`}></div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'profile':
        return (
          <div className="flex flex-col items-center">
            <div className={`${shimmerClass} w-32 h-32 rounded-full mb-4`}></div>
            <div className={`${shimmerClass} h-8 w-48 rounded mb-2`}></div>
            <div className={`${shimmerClass} h-4 w-64 rounded mb-4`}></div>
            <div className={`${shimmerClass} h-4 w-32 rounded mb-6`}></div>
            <div className="flex gap-4">
              <div className={`${shimmerClass} h-10 w-24 rounded-lg`}></div>
              <div className={`${shimmerClass} h-10 w-24 rounded-lg`}></div>
            </div>
          </div>
        );

      case 'list':
        return (
          <div className="space-y-3">
            {[...Array(count)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                <div className={`${shimmerClass} w-12 h-12 rounded-full`}></div>
                <div className="flex-1 space-y-2">
                  <div className={`${shimmerClass} h-4 w-48 rounded`}></div>
                  <div className={`${shimmerClass} h-3 w-64 rounded`}></div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'welcome':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className={`${shimmerClass} w-40 h-40 rounded-full mb-6`}></div>
            <div className={`${shimmerClass} h-10 w-72 rounded mb-3`}></div>
            <div className={`${shimmerClass} h-6 w-96 rounded mb-2`}></div>
            <div className={`${shimmerClass} h-6 w-80 rounded mb-8`}></div>
            <div className={`${shimmerClass} h-14 w-64 rounded-xl`}></div>
          </div>
        );

      case 'card':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(count)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6">
                <div className={`${shimmerClass} h-6 w-32 rounded mb-3`}></div>
                <div className={`${shimmerClass} h-4 w-full rounded mb-2`}></div>
                <div className={`${shimmerClass} h-4 w-3/4 rounded`}></div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {renderSkeleton()}
    </div>
  );
};

export default LoadingSkeleton;
