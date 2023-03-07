import React from 'react'

const Tracker = () => {
  return (
    <div className='flex justify-center mt-20'>
        <div className="flex items-center space-x-2">
          <input className="bg-gray-200 rounded-full px-4 py-2 w-64 md:w-96 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter tracking Id.."
            />
            
          <button
            className="flex flex-shrink bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button">
            Search
          </button>
        </div>
    </div>
  );
}

export default Tracker;