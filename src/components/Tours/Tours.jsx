import React from 'react'
import { Cities } from '../../FakeApi/Cities'
import './Tours.css'
const Tours = () => {
  return (
    <div className='ContainerTours'>
        <div className='headTour'>
            <h2>Our Tours</h2>
        </div>
        <div className='imagesObtain'>
            {Cities.map((item)=>{
                return(
                    <div key={item.id} className='grid-container'>
                        {/* <h3>{item.name}</h3> */}
                        <img src={item.image} className={item.className} alt=''/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Tours