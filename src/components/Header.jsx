
'use client'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)


  
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
                <Link to='/recipes' className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Recipe</Link>
                <Link to='/sharerecipe' className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Add Recipe</Link>
                <Link to='/blog' className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">blog</Link>
                <Link to='/about' className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About us</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                Log in
              </button>
              <Link to='./Signup' className="ml-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Sign up
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="recipes" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Recipe</Link>
            <Link to="sharerecipe" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Add Recipe</Link>
            <Link to="blog" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">blog</Link>
            <Link to="about" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">About us</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded w-full">
                Log in
              </button>
            </div>
            <div className="mt-3 px-5">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
























// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex  flex-wrap p-5 justify-between md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <span className="ml-3 text-xl">Perfect Recipe</span>
//           </a>
//           <button
//             className="inline-flex  md:hidden text-gray-900"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//           <nav
//             className={`${
//               isOpen ? "flex" : "hidden"
//             } md:flex flex-wrap  text-base flex-col justify-between w-full md:w-auto`}
//           >
//             <Link to="/" className="mr-5 hover:text-gray-900">
//               Home
//             </Link>
//             <Link to="/recipes" className="mr-5 hover:text-gray-900">
//               Recipe
//             </Link>
//             <Link to="/sharerecipe" className="mr-5 hover:text-gray-900">
//               Add Recipe
//             </Link>
//             <Link to="/blog" className="mr-5 hover:text-gray-900">
//               Blog
//             </Link>
//             <Link to="/about" className="mr-5 hover:text-gray-900">
//               About Us
//             </Link>
//           <div className="md:ml-auto flex flex-wrap items-center">
//             <Button color={"gray"} text={"Login"} />
//             <Button text={"Sign Up"} />
//           </div>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
