import React from 'react'

const PriceFormatter = ({ number }) => {
    return Intl.NumberFormat("en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
        }).format(
            number/100,
        )
    

}

export default PriceFormatter
