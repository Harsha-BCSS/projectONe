import React, { useState } from 'react';

export default function SimpleWebsite() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen bg-blue-50 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome!</h1>
          <p className="text-gray-700 mb-6">You are now logged in. Explore our amazing features and services.</p>
          <button onClick={() => setLoggedIn(false)} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4,">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-gray-600 mb-6">Enter your credentials to continue</p>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4">
          Sign In
        </button>
        
        <p className="text-center text-gray-600 text-sm">Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up</span></p>
      </div>
    </div>
  );
}