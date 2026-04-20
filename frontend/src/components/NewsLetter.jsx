import React from 'react'
import "./Css/NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Gets Exclusive Offer On Your Email</h1>
      <p>Subscribe our news letter and stay update</p>
      <div>
        <input type="email" placeholder='Enter your email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
