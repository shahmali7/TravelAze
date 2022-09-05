import React from "react";
import { Cities } from "../../FakeApi/Cities";
import "./Tours.css";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AddFavourites } from "../../redux/ItemActions/Actions";

const Tours = () => {
  const dispatch =useDispatch()



  const AddCityToBasket=(item)=>{
    dispatch(AddFavourites(item))
  }
  return (
    <div name="tours" id="tours" className="ContainerTours">
      <div className="headTour">
        <p style={{ color: "red" }}>Where to go</p>
        <h3 style={{ color: "blue" }}>in Azerbaijan</h3>
      </div>
      <div className="grid-container">
        <div className="imagesGrid">
          {Cities.map((item) => {
            return (
              <div key={item.id} className="imagesDiv">
                <img src={item.image} className={item.className} alt="" />
                <div className="overlay">
                  <span className="heart">
                    <BsHeartFill onClick={()=>AddCityToBasket(item)}/>
                  </span>
                  <div className="items">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tours;
