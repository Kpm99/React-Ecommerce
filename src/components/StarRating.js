import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./starRating.css"
const StarRating = ({ stars, reviews }) => {
    console.log("stars", stars);
    console.log("reviews", reviews);
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? <FaStar key={index} className="star" />
                        : number >= stars ? <FaStarHalfAlt key={index} className="star" />
                            : <AiOutlineStar key={index} className="star" />
                }
            </span>
        )

    })
    return (
        <div className='star-rating'>

            {starRating}


            <p className='reviews'>Number of reviews {reviews}</p>
        </div>
    )
}

export default StarRating
