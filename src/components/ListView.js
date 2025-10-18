import React from 'react'
import {Button} from "../styles/Button"
import "./listView.css"
import PriceFormatter from '../helper/PriceFormatter'
const ListView = ({ products }) => {
    return (
        <div className='list-container'>
            {
                products.map((currItem,index) => {
                    console.log("curr",currItem);
                    
                    return (
                        <div className='product-container'>
                            <div className='img-container'>
                                <img src={currItem.image} className='image'/>
                            </div>
                            <div className='product-info-container'>
                                <h3 className='productName'>{currItem.name}</h3>
                                <div>

                                <p><PriceFormatter number ={currItem.price} /></p>
                                <p className='description'>{currItem.description.slice(0,99)}...</p>
                                </div>
                                <button className='read-more-btn'>
                                   <span> Read More</span>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListView
