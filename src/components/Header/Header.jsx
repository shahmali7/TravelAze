import React from 'react'

import Logo from '../../assets/logoMain.png'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import {Link} from 'react-scroll'


import './Header.css'
const Header = () => {
  
  return (
    <header className='Header'>
      <a href='#Home'>
        <img src={Logo} alt='' className='AzeLogo' />
      </a>
      <nav>
        <ul className='Links'>
          <Link to='home' smooth={true} duration={500}><li className='link' >Home</li></Link>
          <Link  to='regions' smooth={true} duration={500}><li className='link' >Regions</li></Link>
          <Link  to='history' smooth={true} duration={500}><li className='link'>History</li></Link>
          <Link to='tours'  smooth={true} duration={500} ><li className='link'>Tours</li></Link>
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