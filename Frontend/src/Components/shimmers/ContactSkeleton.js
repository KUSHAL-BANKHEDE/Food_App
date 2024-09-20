import React from 'react'

const ContactSkeleton = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center flex-wrap">
      <div className="max-w-6xl w-full my-20 items-center flex flex-wrap gap-6 justify-center">

        {/* Links Card Skeleton */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 max-w-md">
          <div className="flex flex-col items-center">
            <div className="h-8 w-3/4 bg-gray-300 shimmer my-5"></div>
            <div className="h-28 w-full bg-gray-300 shimmer mb-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-3/4 bg-gray-300 shimmer my-5"></div>
            <div className="h-28 w-full bg-gray-300 shimmer mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSkeleton
