import React, { useContext, useRef, useState,useEffect } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from "../../assets/nav_dropdown.png"
import Logout from '../../pages/Logout'

const Navbar = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [menu, setMenu] = useState("Shop");
    const {getTotalItem} = useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle("nav-menu-visible")
      e.target.classList.toggle("open")
    }
    
     useEffect(() => {
  const handleAuthChange = () => {
  setIsLoggedIn(!!localStorage.getItem("token"));
 } 
  window.addEventListener("authChange", handleAuthChange);
  return() => window.removeEventListener("authChange", handleAuthChange)
 }, [])

  return (
    <>
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="img" />
        <p>Faimly Mart</p>
        </div>
        <div>
        <img className='nav-dropdown' onClick={dropdown_toggle}  src={nav_dropdown} alt="" />
        {isLoggedIn && (
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=> { setMenu("shop")}}> <Link style={{textDecoration:"none"}} to="/">Shop</Link> {menu === "shop"? <hr/>: <></>}</li>
        <li onClick={()=> { setMenu("mens")}}> <Link style={{textDecoration:"none"}} to="/mens">Men</Link> {menu === "mens"? <hr/>: <></>}</li>
        <li onClick={()=> { setMenu("womens")}}> <Link style={{textDecoration:"none"}} to="/womens">Women</Link> {menu === "womens"? <hr/>: <></>}</li>
        <li onClick={()=> { setMenu("kids")}}> <Link style={{textDecoration:"none"}} to="/kids">Kids</Link> {menu === "kids"? <hr/>: <></>}</li>
      </ul>
        )}
        </div>
      <div className='nav-login-cart'>
      {!isLoggedIn &&  <Link to="/signup"><button>Signup</button></Link>} 
      {!isLoggedIn &&  <Link to="/login"> <button>Login</button></Link> }
       {isLoggedIn && <Logout/> }
       {isLoggedIn && <Link to = "/cart"><img src={cart_icon} alt="" /></Link>}
      {isLoggedIn &&  <div className='nav-cart-count'>{getTotalItem()}</div> }
      </div>
    </div>
    </>
  )
}

export default Navbar

