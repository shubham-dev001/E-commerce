import React, { useContext } from 'react'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import "./Css/Productdisplay.css"
import { ShopContext } from '../context/ShopContext'

const Productdisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
      <div className="productdisplay-image-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className="display-image">
        <img className='productdisplay-main-image' src={product.image} alt="" />
      </div>
      </div>
      <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(150)</p>
       </div>
       <div className="productdisplay-right-price">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
       </div>
       <div className="productdisplay-right-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Nostrum, commodi. Laboriosam reprehenderit molestiae quo 
        libero dolore alias cumque eligendi quae.
       </div>
       <div className="productdisplay-right-size">
        <h1>select Size</h1>
        <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
        </div>
       </div>
       <button onClick={()=> {addToCart(product.id)}}>Add to Cart</button>
       <p className='productdisplay-right-category'><span>Category : </span>women, T-shirt, top</p>
       <p className='productdisplay-right-category'><span>Tags : </span>Latest, Modern</p>
      </div>
    </div>
  )
}

export default Productdisplay
