import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum'
import Productdisplay from '../components/Productdisplay'
import DescriptionBox from '../components/DescriptionBox'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) return <div>Loading product...</div>;
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
