import React from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import History from './components/History/History';
import Hero from './components/Home/Hero';
import Pleasure from './components/pleasure/pleasure';
import Regions from './components/Regions/Regions';

function App() {
  return (
   <>
      <Header/>
      <Hero/>
      <Pleasure/>
      <Regions/>
      {/* <History/>
      <Footer/> */}
   </>
  );
}

export default App;
