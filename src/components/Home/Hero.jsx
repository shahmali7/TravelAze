import React, { useState } from 'react'
import Video from '../../assets/BakuHeader.mp4'
import './Hero.css'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { Cities } from '../../FakeApi/Cities'
const Hero = () => {
  const [isOpenCity, setIsOpenCity] = useState(false)
  const [city, setCity] = useState('')
  const [time,setTime]=useState('')
  const [date,setDate]=useState('')


  console.log(time,date);

  const takeDate=(e)=>{
    alert(e.target.value)
  }
  return (
    <div name='home' className='Banner'>
      <video src={Video} autoPlay muted loop />
      <div className='search'>


        <div className='options' onClick={() => setIsOpenCity(!isOpenCity)}>

          <div>{city === '' ? 'Any Location' : { city }}</div>

          {isOpenCity ? (<RiArrowDropUpLine />) : (<RiArrowDropDownLine />)}
          {isOpenCity ? (<div className='Cities'>
            {Cities.map((City) => {
              return (
                <ul key={City.id}>
                  <li onClick={takeDate}>{City.name}</li>
                </ul>
              )
            })}
          </div>) : ''}

        </div>


        <div className='options'>
          <input type='date' className='Date' onChange={(e)=>setDate(e.target.value)}/>
        </div>


        <div className='options'>
          <input type='time' className='Date' onChange={(e)=>setTime(e.target.value)} />
        </div>


        <button className='exploreCity' >Explore</button>
      </div>
    </div>
  )
}

export default Hero