import React from 'react'
import { useGlobalContext } from "../context/context"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';
import "./Features.css"

const Features = () => {
    let { loading, products } = useGlobalContext();
    console.log("products in features", products, loading);


    return (
        <div className='feature-repeater'>
            <div className='feature-heading'>
                <h3>
                    CHECK NOW!
                </h3>
                <h2>
                    Our Featured Services
                </h2>
            </div>


            <div className='feature-container'>
                {
                    loading == true ? <h1>loading.....</h1> : products.map((currElem) => {
                        if (currElem.featured === true) {
                            return (
                                <Product key={currElem.id} {...currElem} />
                            )
                        }



                    })
                }
            </div>
        </div>
    )
}

export default Features
