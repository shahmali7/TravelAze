import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Favourites.css'
import { FiDelete } from 'react-icons/fi'
import { DeleteItem } from '../../redux/ItemActions/Actions'

const emptyCities = () => {
  return (
    <div>
      You did not choose any City or Tours
    </div>
  )
}



const ChoosenCities = ({ save }) => {

  const dispatch = useDispatch()


  const sendIdToRedux = (id) => {
    dispatch(DeleteItem(id))
  }

  return (
    <div className='All'>
      <div className='Contain'>
        <div key={save.id} className="FavDiv">
          <img src={save.image} className={save.className} alt="" />
          <div className="overlayfav">
            <button className='Delete' onClick={() => sendIdToRedux(save.id)}><FiDelete /></button>
            <div className="itemsFav">
              <h3>{save.name}</h3>
              <p> price: $ {save.cost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Favourites = () => {

  const saved = useSelector((state) => state.BasketData)
  const SetSaved = [...new Set(saved)]
  return (
    <div>
      {saved.length === 0 && emptyCities()}
      {saved.length !== 0 && SetSaved.map((save) => (
        <ChoosenCities key={save.id} save={save} saved={saved} />
      ))}
    </div>
  )
}

export default Favourites