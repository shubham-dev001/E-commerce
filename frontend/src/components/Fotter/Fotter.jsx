import React from 'react'
import footer_logo from "../../assets/logo_big.png"
import "./Fotter.css"
import instagram_icon from "../../assets/instagram_icon.png"
import pintester_icon from "../../assets/pintester_icon.png"
import whatsapp_icon from "../../assets/whatsapp_icon.png"


const Fotter = () => {
  return (
    <div className='fotter'>
      <div className="fotter-logo">
        <img src={footer_logo} alt="" />
        <p>Faimly Mart</p>
      </div>
      <ul className="fotter-links">
        <li>company</li>
        <li>Product</li>
        <li>offices</li>
        <li>About</li>
        <li>contact</li>
      </ul>
      <div className="fotter-social-icon">
        <div className="fotter-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="fotter-icon-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="fotter-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="fotter-copyright">
        <hr />
        <p>Copyright @ 2026 All right reserved</p>
      </div>
    </div>
  )
}

export default Fotter
