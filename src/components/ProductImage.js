import React from 'react'

const ProductImage = (image) => {
  return (
    <div>
      <img src={image} alt="product" style={{width:"100%"}} />
    </div>
  )
}

export default ProductImage
