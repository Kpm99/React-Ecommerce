import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
const AddtoCart = ({productData} ) => {

  const [quantity, setquantity] = useState(1)
  console.log("single Product add to cart page", productData);
  function handleQuantity(){
    if(productData.stock > quantity){
      setquantity(quantity+1)
      
    }
  }

  function handleQuantityReduce(){
    if(quantity > 1){
      setquantity(quantity-1)
    }
  }
  return (
    <div>
      <button onClick={handleQuantity}>
        <FaPlus />
      </button>
        <input type="text" value={quantity} readOnly style={{width:"30%",textAlign:"center",height:"20px"}}/>
        
         
      <button onClick={handleQuantityReduce}>
        <FaMinus />
      </button>
    </div>
  )
}

export default AddtoCart
