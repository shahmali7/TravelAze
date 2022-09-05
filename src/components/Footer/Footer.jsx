import React from 'react'
import AzeLogo from '../../assets/azerbaijan_-logo-turistički-removebg-preview.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterHead'>
            <h2>Subscribe to Our newsletter</h2>
            <form className='Contact'>
               <input type='text' placeholder='Your name ...'/>
               <input type='email' placeholder='Your email ...'/>
               <button>Send</button>
            </form>
      </div>
      <div className='FooterAlt'>
         <img src={AzeLogo} alt='' className='FooterLogo' />
         <h5>Terms & Conditions | Privacy Policy | Cookies Policy</h5>
         <p>AzerbaijanTravel © All rights reserved 2022</p>
      </div>
    </div>
  )
}

export default Footer