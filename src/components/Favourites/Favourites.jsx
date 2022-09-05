import React from 'react'
import {useSelector} from 'react-redux'
import './Favourites.css'
const emptyCities =()=>{
  return(
    <div>
      You did not choose any City or Tours
    </div>
  )
}



const ChoosenCities = ()=>{
  const saved =useSelector((state)=>state.BasketData)
    return(
      <div>
        {saved.map((item)=>{
          return(
            <div key={item.id} className="imagesDiv">
                <img src={item.image} className={item.className} alt="" />
                <div className="overlay">
                  <div className="items">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    )
}

const Favourites = () => {
  
  const saved =useSelector((state)=>state.BasketData)
  return (
    <div>
      {saved.length === 0 && emptyCities() }
      {saved.length !== 0 && ChoosenCities(saved)}
    </div>
  )
}

export default Favourites