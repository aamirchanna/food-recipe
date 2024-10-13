
import { BrowserRouter , Routes ,Route } from 'react-router-dom'

// import Cards from './components/Cards'
// import Footer from './components/Footer'
// import Header from './components/Header'
import Home from './pages/Home'
import About from "./pages/About"
import ShareRecipe from './pages/ShareRecipe'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Recipe from './pages/Recipe'
import Login from './pages/auth/Login'
import Signup from './pages/auth/signup'
import NotFound from './components/NotFound'

// import HeroSection from './components/HeroSection' 
// import RecipeShare from './components/RecipeShare'
function App() {

  return (
   <div>
   
      
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/recipe' element={<Recipe/>}></Route>
      <Route path='/sharerecipe' element={<ShareRecipe/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

             <Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/signup' element={<Signup/>}></Route>
             </Route>
   <Route path="*" element={<NotFound/>}></Route>  
      </Routes>
      <Footer/>
     </BrowserRouter>
{/* <Footer/> */}
   </div>
  )
}


export default App;
