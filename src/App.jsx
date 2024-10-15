// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import About from './pages/About';
// import ShareRecipe from './pages/ShareRecipe';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Recipes from './pages/Recipes';
// import Login from './pages/auth/Login';
// import Signup from './pages/auth/Signup';
// import NotFound from './components/NotFound';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Recipes" element={<Recipes />} />
//           <Route path="/sharerecipe" element={<ShareRecipe />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ShareRecipe from './pages/ShareRecipe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/sharerecipe" element={<ShareRecipe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
