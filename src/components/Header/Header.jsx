import React from 'react'

import Logo from '../../assets/logoMain.png'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { Link } from 'react-scroll'


import './Header.css'
const Header = ({setgoSaved,goSaved}) => {
   

  const Links =[
    {
      name:'Home',
      to:'home',
      id:1
    },
    {
      name:'Regions',
      to:'regions',
      id:2
    },
    {
      name:'History',
      to:'history',
      id:3
    },
    {
      name:'Tours',
      to:'tours',
      id:4
    },
  ]


  return (
    <header className='Header'>
      <Link to='home' smooth={true} duration={500}>
        <img src={Logo} alt='' className='AzeLogo' />
      </Link>
      <nav >
        <ul className='Links' >
          {Links.map((item)=>{
            return(

          <Link to={item.to} smooth={true} duration={500} key={item.id} onClick={()=>setgoSaved(true)} ><li className='link' >{item.name}</li></Link>
            )
          })}
          <button className='Icon'><AiOutlineClose /></button>
        </ul>
      </nav>
      <button className='Icon'><HiOutlineMenuAlt4 /></button>
      <div>
        <Link smooth={true} duration={500} onClick={()=>setgoSaved(!goSaved)}><BsSuitHeart style={{ fontSize: '1.2rem', fontWeight: 700, color: 'red',cursor:'pointer'}} /></Link>
      </div>
    </header>
  )
}

export default Header