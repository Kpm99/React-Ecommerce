import React from 'react'
import "./product.css"
import { NavLink } from 'react-router-dom';
import PriceFormatter from '../helper/PriceFormatter'
const Product = (currProduct) => {
    //console.log("currProduct", currProduct);
    return (
        <NavLink to={`/singleproduct/${currProduct.id}`} className="product-link">
            <div className='product-card'>

                <div className='card'>
                    <img src={currProduct.image} alt={currProduct.name} />
                </div>
                <div className='card-footer'>
                    <p className='product-name'>
                        {currProduct.name}
                    </p>
                    <p className='product-price'>
                        <PriceFormatter number={currProduct.price} />
                    </p>
                </div>
                <div className='category-div'>
                    <span className='category-text'>{currProduct.category.toUpperCase()}</span>
                </div>

            </div>
        </NavLink>
    )
}

export default Product
