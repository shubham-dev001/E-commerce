import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>  Out of 36 product
        </p>
        <div className="shopCategory-sort">
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name}
              image={item.image} new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null;
          }

        })}
      </div>
      <div className="explore-more">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
