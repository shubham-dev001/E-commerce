import React from 'react'
import "./Css/Breadcrum.css"
import arrow_icon from "../assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='bradcrum'>
      Home <img src={arrow_icon} alt="" /> 
      shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name} 
    </div>
  )
}

export default Breadcrum
