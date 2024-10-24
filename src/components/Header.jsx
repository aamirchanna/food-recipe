'use client'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'; // Ensure this is your Firebase config
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log out the user
    } catch (error) {
      console.error('Logout failed:', error.message); // Handle logout error
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">
                <span className="text-red-500">Perfect</span>Recipe
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/recipes" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Recipe</Link>
                {user && (
                  <>
                    <Link to="/sharerecipe" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Add Recipe</Link>
                    <Link to="/myrecipe" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">My Recipe</Link>
                  </>
                )}
                <Link to="/blog" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About us</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!user ? ( // Check if user is logged in
              <>
                <Link to="/login" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                  Log in
                </Link>
                <Link to="/signup" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <span className="text-gray-600 font-semibold">Welcome, {user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Log out
                </button>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/recipes" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Recipe</Link>
            {user && (
              <Link to="/sharerecipe" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Add Recipe</Link>
            )}
            <Link to="/blog" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">About us</Link>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-5">
              {!user ? (
                <Link to="/login" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded w-full">
                  Log in
                </Link>
              ) : (
                <span className="font-semibold">Welcome, {user.email}</span>
              )}
            </div>
            {!user && (
              <div className="mt-3 px-5">
                <Link to="/signup" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full">
                  Sign up
                </Link>
              </div>
            )}
            {user && (
              <div className="mt-3 px-5">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
