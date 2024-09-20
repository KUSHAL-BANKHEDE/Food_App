import React from 'react';

const AboutPageSkeleton = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center flex-wrap">
      <div className="max-w-6xl my-10 w-full flex flex-wrap gap-6 justify-center">
        {/* User Info Card Skeleton */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full shimmer my-3"></div>
            <div className="h-8 w-3/4 bg-gray-300 shimmer my-3"></div>
            <div className="h-6 w-2/4 bg-gray-300 shimmer my-3"></div>
            <div className="h-6 w-3/4 bg-gray-300 shimmer my-3"></div>
            <div className="h-48 w-full bg-gray-300 shimmer mt-2"></div>
          </div>
        </div>

        {/* Repositories Card Skeleton */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex flex-col items-center">
            <div className="h-8 w-3/4 bg-gray-300 shimmer my-5"></div>
            <div className="h-24 w-full bg-gray-300 shimmer mb-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-3/4 bg-gray-300 shimmer my-5"></div>
            <div className="h-20 w-full bg-gray-300 shimmer mb-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-3/4 bg-gray-300 shimmer my-5"></div>
            <div className="h-20 w-full bg-gray-300 shimmer mb-4"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPageSkeleton;
