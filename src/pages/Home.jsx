import Blog from './Blog';
import Main from '../components/Main';
import { Newslater } from '../components/Newslater';

function Home() {
  return (
    <>
      {/* Uncomment these if you need them */}
      {/* <Header /> */}
      {/* <HeroSection /> */}
      
      <Main />
      <Blog />
      <Newslater/>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
