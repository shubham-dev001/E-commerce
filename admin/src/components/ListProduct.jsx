import React, { useEffect, useState } from 'react'
import cross_icon from "../assets/cross_icon.png"
import "./Css/ListProduct.css"

const ListProduct = () => {
  const Host = "https://e-commerce-backend-aslv.onrender.com";
  const [allProducts, setAllProducts] = useState([])
  const fetchInfo = async () => {
    await fetch(`${Host}/allproduct`)
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) })
  }
  useEffect(() => {
    fetchInfo();
  }, [])
  const RmoveItem = async (id) => {
    await fetch(`${Host}/removeproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo();
  }
  return (
    <div className='listproduct'>
      <h1>All Product List</h1>
      <div className="listproduct-formait-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />

        {allProducts.map((product, index) => {
          return <><div key={index} className='listproduct-formait-main listproduct-formait'>
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={() => { RmoveItem(product.id) }} src={cross_icon} className='listproduct-remove-icon' alt="" />
          </div>
            <hr />

          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
