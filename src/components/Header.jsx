import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Perfect Recipe</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link  to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link  to={'recipe'} className="mr-5 hover:text-gray-900">Recipe</Link>
      <Link  to={"sharerecipe"} className="mr-5 hover:text-gray-900">Add Recipe</Link>
      <Link  to={"blog"} className="mr-5 hover:text-gray-900">Blog</Link>
      <Link  to={"about"} className="mr-5 hover:text-gray-900">About Us</Link>
    </nav>
    <button className="px-6 py-3 text-white bg-gray-300 rounded-lg m-1 hover:bg-gray-400">Login</button>
    <button className="px-6 py-3 text-white bg-red-500 rounded-lg m-1 hover:bg-red-600">Sign Up</button>


  </div>
</header>

    </div>
  )
}

export default Header