import React, {useEffect,useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import History from './components/History/History';
import Hero from './components/Home/Hero';
import Pleasure from './components/pleasure/pleasure';
import Regions from './components/Regions/Regions';
import Tours from './components/Tours/Tours';
import scrollreveal from 'scrollreveal'
import Favourites from './components/Favourites/Favourites';
function App() {


  const [goSaved,setgoSaved] = useState(true)

  useEffect(()=>{
    const sr = scrollreveal({
      origin: 'top',
      distance : '80px',
      duration: 1500,
      reset: true
    });
    sr.reveal(
      `
      nav,
      #hero,
      #pleasure,
      #history,
      #regions,
      #tours,
      footer`,{
        opacity: 0,
        interval:300
      }
    )
  },[])
  const Links = [
    {
      name: <Hero/>,
    },
    {
      name: <Pleasure/>,
    },
    {
      name: <Regions/>,
    },
    {
      name: <History/>,
    },
    {
      name: <Tours/>,
    },
    {
      name: <Footer/>,

    },
  ]
  return (
   <>
      <Header setgoSaved={setgoSaved} goSaved={goSaved}/>
   { goSaved ? (
    <>
    {Links.map((item)=>{
      return(
        <>{item.name}</>
      )
    })}

    </>) : (
    <>
        <Favourites/>
    </>)
   }
   </>
  );
}

export default App;
