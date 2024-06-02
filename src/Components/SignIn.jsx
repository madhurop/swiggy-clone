import React, { useState } from 'react';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 py-8 pt-8">
          <h2 className={`text-2xl font-bold text-center mb-6 ${isSignUp ? 'text-orange-300' : 'text-orange-400'}`}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <form action="#">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
            )}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              
            </div>
            <div className="flex items-center justify-between">
              <button
                className={`bg-${isSignUp ? 'orange-300' : 'orange-400'} hover:bg-${isSignUp ? 'orange-400' : 'orange-500'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                type="button"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-orange-400 hover:text-orange-500 cursor-pointer"
                onClick={toggleForm}
              >
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
