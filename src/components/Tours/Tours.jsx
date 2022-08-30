import React from 'react'
import { Cities } from '../../FakeApi/Cities'
import './Tours.css'
import { BsSuitHeart } from 'react-icons/bs'

const Tours = () => {
  return (
    <div name='tours' className='ContainerTours'>
        <div className='headTour'>
            <p style={{color:'red'}}>Where to go</p>
            <h3 style={{color:'blue'}}>in Azerbaijan</h3>
        </div>
        <div className='grid-container'>
                    <div  className='imagesGrid'>
            {Cities.map((item)=>{
                return(
                    <div key={item.id} className='imagesDiv'>
                        <img src={item.image} className={item.className} alt=''/>
                        <div className='overlay'>
                            <span><BsSuitHeart/></span>
                            <div>
                                <h3>{item.name}</h3>
                                <button>More</button>
                            </div>
                        </div>
                    </div>
                )
            })}
                    </div>
        </div>
    </div>
  )
}

export default Tours