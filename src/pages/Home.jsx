import Blog from './Blog';

import Main from '../components/Main';
import { Newslater } from '../components/Newslater';
import Trending from '../components/Trending';

function Home() {
  return (
    <>
   
      <Main />
      <Blog />
      <Newslater/>
      <Trending/>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
