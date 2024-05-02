import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
  const error=useRouteError()
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">Oops!</h1>
          <p className="text-xl text-gray-600 mb-8">Something went wrong...</p>
          <p className="text-lg text-gray-700 mb-4">{error.status}</p>
          
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};



export default Error
