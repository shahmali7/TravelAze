import React, { Component } from "react";
import Slider from "react-slick";
import { Cities } from "../../FakeApi/Cities";
import './Regions.css'
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    
    return (
      <div className="Slider">
        <Slider {...settings}>
          {Cities.map((item)=>{
            return(
                <div key={item.id}>
                   <h3 style={{textAlign:'center',marginBottom:'10px',marginRight:'45px',textTransform:'uppercase'}}>{item.name}</h3>
                   <img src={item.image} alt='' className="SliderImage"/>
                   <button className="GoDetail">Details</button>
                </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}