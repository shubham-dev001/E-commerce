import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from "../assets/cart_cross_icon.png"
import "./Css/cartItem.css"

const CartItem = () => {
  const { all_product, cartItems, removeFromCart, gettotalAmount } = useContext(ShopContext)
  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems?.[e.id] > 0) {
          return <div key={e.id}>
            <div className="cartitem-format cartitem-format-main">
              <img className='carticon-producticon' src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitem-quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img className='cartitem-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>

        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>SubTotal</p>
              <p>${gettotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${gettotalAmount()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
