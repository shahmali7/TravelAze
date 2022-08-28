import React from 'react'

import Logo from '../../assets/logoMain.png'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import './Header.css'
const Header = () => {
  
  return (
    <header className='Header'>
      <a href='#Home'>
        <img src={Logo} alt='' className='AzeLogo' />
      </a>
      <nav>
        <ul className='Links'>
          <li className='link' ><a href='#Home'>Home</a></li>
          <li className='link' ><a href='#Regions'>Regions</a></li>
          <li className='link' ><a href='#History'>History</a></li>
          <li className='link' ><a href='#Tours'>Tours</a></li>
          <button className='Icon'><AiOutlineClose /></button>
        </ul>
      </nav>
      <button className='Icon'><HiOutlineMenuAlt4 /></button>
      <div>
        <button><BsSuitHeart style={{ fontSize: '1.2rem', fontWeight: 700, color: 'red' }} /></button>
      </div>
    </header>
  )
}

export default Header