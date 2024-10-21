// 'use client'

// import {  useState } from 'react'
// import { initializeApp } from 'firebase/app'
// import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

// // Initialize Firebase (replace with your own config)
// const firebaseConfig = {
//   apiKey: "AIzaSyB_i_PR6GHwzCf5iVXzKQjhM2iic9dZhDk",
//   authDomain: "food-recipe-64224.firebaseapp.com",
//   projectId: "food-recipe-64224",
//   storageBucket: "food-recipe-64224.appspot.com",
//   messagingSenderId: "702075590786",
//   appId: "1:702075590786:web:53f531d31f78507dae7c9b",
//   measurementId: "G-CVCF32TWVC"
// };


// const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)

// export default function SignUpForm() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [success, setSuccess] = useState('')
// //React.FromEvent
//   const handleSignUp = async (e) => {
//     e.preventDefault()
//     setError('')
//     setSuccess('')
//     try {
//       await createUserWithEmailAndPassword(auth, email, password)
//       setSuccess('Account created successfully!')
//     } catch (error) {
//       setError('Failed to create an account. Please try again.' , error)
//     }
//   }

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider()
//     try {
//       await signInWithPopup(auth, provider)
//       setSuccess('Signed in with Google successfully!')
//     } catch (error) {
//       setError('Failed to sign in with Google. Please try again.' , error)

//     }
//   }

//   const handleFacebookSignIn = async () => {
//     const provider = new FacebookAuthProvider()
//     try {
//       await signInWithPopup(auth, provider)
//       setSuccess('Signed in with Facebook successfully!')
//     } catch (error) {
//       setError('Failed to sign in with Facebook. Please try again.' , error)
//     }
//   }

//   return (
//     <div className="flex min-h-screen">
//       <div className="hidden md:block md:w-1/2">
//         <img
//           src="/placeholder.svg?height=1080&width=1080"
//           alt="Colorful bowl of healthy food"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="w-full md:w-1/2 flex items-center justify-center px-8 bg-white">
//         <div className="max-w-md w-full">
//           <h1 className="text-2xl font-semibold mb-6">Want to join our Family</h1>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           {success && <p className="text-green-500 mb-4">{success}</p>}
//           <form onSubmit={handleSignUp} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="Example123@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="relative">
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                 placeholder="********"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
//                 <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                 I agree to the terms & policy
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Sign up
//             </button>
//           </form>
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>
//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <div>
//                 <button
//                   onClick={handleGoogleSignIn}
//                   className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//                 >
//                   <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
//                   </svg>
//                 </button>
//               </div>
//               <div>
//                 <button
//                   onClick={handleFacebookSignIn}
//                   className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//                 >
//                   <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }