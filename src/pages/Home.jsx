// import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main';
import Blog from './Blog';
// import HeroSection from './components/HeroSection' 
// import RecipeShare from './components/RecipeShare'
function Home() {

    // const navigate = useNavigate()
    //    const goToAboutPage = () => navigate("about")


    return (
        <div>
            <Header />
            {/* <HeroSection/> */}
            <Main />
            <Blog/>
            <Footer />
        </div>
    )
}


export default Home;
