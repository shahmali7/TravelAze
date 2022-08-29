import React from 'react'
import ReadMore from './ReadMore'
import { Cities } from '../../FakeApi/Cities';
import './History.css'

const History = () => {
  return (
    <div className='ContainerHistory'>
      {Cities.map((item) => {
        return (
          <ReadMore key={item.id} name={item.name}>
          {item.international}
          </ReadMore>
        )
      })}
    </div>
  )
}

export default History