import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
const ColorPicker = ({productData}) => {
    console.log("productData",productData);
    const [colorIndex , setColorIndex] = useState(0)
  return (
    <div>
        {productData?.colors?.map((color,index) => (
            <button key={color} onClick={() => setColorIndex(index)}
             style={{ backgroundColor: color, width: "30px", height: "30px", margin: "5px", borderRadius:"50px"}}>
                {
                    colorIndex == index && <TiTick style={{color:"white",margin:"auto"}} />
                }
                
               
            </button>
        ))}
        
    </div>
  )
}

export default ColorPicker
