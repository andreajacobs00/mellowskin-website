
'use client';

import { useState } from 'react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => void;
}

export default function SignInModal({ isOpen, onClose, onSignIn }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-pink-600 hover:text-pink-700 font-medium ml-2 cursor-pointer"
              >
                {isSignUp ? 'Sign In' : 'Create Account'}
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <button className="text-pink-600 hover:text-pink-700 text-sm cursor-pointer">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
