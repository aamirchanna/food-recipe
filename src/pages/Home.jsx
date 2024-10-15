import React from 'react';
import Blog from './Blog';
import Main from '../components/Main';
// Uncomment these if you need them
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import HeroSection from './components/HeroSection';

function Home() {
  return (
    <>
      {/* Uncomment these if you need them */}
      {/* <Header /> */}
      {/* <HeroSection /> */}
      
      <Main />
      <Blog />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
