import React from 'react'
import {BiLike} from 'react-icons/bi'
import {RiRefund2Fill} from 'react-icons/ri'
import {TbLicense} from 'react-icons/tb'
import './Pleasure.css'
const Pleasure = () => {
  return (
    <div className='Pleasure'>
        <div className='Options'>
           <span>
             <BiLike/>
           </span>
           <div>
            <h3>100% Pleasure</h3>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores accusantium 
           </p>
           </div>
        </div>
        <div className='Options'>
           <span>
           <RiRefund2Fill/>
           </span>
           <div>
            <h3>Refund</h3>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores accusantium 
           </p>
           </div>
        </div>
        <div className='Options'>
           <span>
               <TbLicense/>
           </span>
           <div>
            <h3>Guarantee</h3>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores accusantium 
           </p>
           </div>
        </div>
    </div>
  )
}

export default Pleasure