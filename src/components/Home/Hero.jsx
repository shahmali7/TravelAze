import React from 'react'
import Video from '../../assets/BakuHeader.mp4'
import './Hero.css'
const Hero = () => {
  return (
    <div name='home' id='hero' className='Banner'>
      <video src={Video} autoPlay muted loop />
    </div>
  )
}

export default Hero