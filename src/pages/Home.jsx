
import Main from '../components/Main';
import { Newslater } from '../components/Newslater';
import TrendingRecipe from '../components/TrendingRecipe';
import FeaturedBlogs from '../components/FeaturedBlog';

function Home() {
  return (
    <>
   
      <Main />
      <FeaturedBlogs />
      <TrendingRecipe/>
      <Newslater/>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
