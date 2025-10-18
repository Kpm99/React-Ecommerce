import React from 'react';
import "./imageComponent.css";
import { useState } from 'react';
const ImageComponent = ({ image }) => {
    console.log("imageee", image);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    return (
        <div className='image-component'>
            <div className='side-images'>
                {!image || image.length === 0 ? (
                    <h1>Loading...</h1>
                ) : (
                    image.map((currImg, index) => (
                        <img
                            key={index}
                            src={currImg.url}
                            alt={`product-${index}`}
                            className='side-image'
                            onClick={() => setMainImageIndex(index)}
                        />
                    ))
                )}
            </div>

            <div className='main-image'>
                {image && image.length > 0 && (
                    <img src={image[mainImageIndex].url} alt="main-product" />
                )}
            </div>
        </div>
    );
};

export default ImageComponent;
