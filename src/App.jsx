
import './App.css'
// import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RecipeShare from './components/RecipeShare'
function App() {

  return (
   <div>
    <Header/>
    <HeroSection/>
    <RecipeShare/>
    {/* <main className="container mx-auto px-6 py-8">
        <section className="flex items-center justify-between mb-16">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold mb-4">Your Daily Dish</h2>
            <h3 className="text-3xl font-bold text-red-500 mb-4">A Food Journey</h3>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600">Sign Up</button>
          </div>
          <div className="w-1/2 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full -z-10"></div>
            <img 
              src="/placeholder.svg?height=300&width=300" 
              alt="Delicious dish" 
              width={300} 
              height={300} 
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2">
              <img 
                src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain" 
                alt="User avatar" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <div>
                <div className="flex items-center">
                 <p>******</p>
                </div>
                <p className="text-sm text-gray-600">John Doe</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-between mb-16">
          <div className="w-1/2">
            <img 
            src="https://s1.1zoom.me/big0/588/The_second_dishes_Shrimp_Tomatoes_White_background_517162_1280x853.jpg"

              alt="Share your recipes" 
              width={400} 
              height={400} 
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-4">Share Your <span className="text-red-500">Recipes</span></h2>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600 flex items-center">
              Submit Recipe
              
            </button>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Trending Recipe</h2>
            <a href="#" className="text-red-500 hover:text-red-600">View more</a>
          </div>
          <Cards/>
        </section>
      </main> */}
<Footer/>
   </div>
  )
}


export default App;
