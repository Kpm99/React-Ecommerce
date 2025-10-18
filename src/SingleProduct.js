import styled from "styled-components";
import React from 'react'
import { useEffect } from "react";
import { useGlobalContext } from "./context/context";
import { useParams } from "react-router-dom";
import ProductImage from "./components/ProductImage";
import Navigator from "./components/Navigator";
import PriceFormatter from "./helper/PriceFormatter";
import { LuTruck } from "react-icons/lu"
import { GiCheckedShield } from "react-icons/gi";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import ImageComponent from "./components/ImageComponent";
import ColorPicker from "./components/ColorPicker";
import StarRating from "./components/StarRating";
import AddtoCart from "./components/AddtoCart";
import "./singleProduct.css"
const SingleProduct = () => {
  const { id } = useParams();
  //let id = new URLSearchParams(queryString);
  const { loadSingleProduct, singleProductLoading,
    singleProductError, singleProduct } = useGlobalContext();
  console.log("id", id);
  console.log("singleProductLoading", singleProduct);

  const { id: alias, name, company, price, description } = singleProduct


  useEffect(() => {
    loadSingleProduct(`https://api.pujakaitem.com/api/products/${id}`);
  }, [id]);

  return <Wrapper>

    <Navigator name={name} />
    <div className="container">
      <div className="product-image">
        <ImageComponent image={singleProduct.image} />
      </div>

      <div className="product-data">
        <h2>{name}</h2>
        <StarRating stars={singleProduct.stars} reviews={singleProduct.reviews} />
        <p>{singleProduct.reviews} reviews</p>
        <del>
          {<PriceFormatter number={price + 250000} />}
        </del>
        <p className="deal-para">Deal of the Day : {<PriceFormatter number={singleProduct.price} />}</p>
        <p>{singleProduct.description}</p>
        <div className="product-features">
          <div className="feature-div">
            <LuTruck className="feature-icon" />
            <p className="feature-para">Free Delivery</p>
          </div>
          <div className="feature-div">
            <MdOutlineSwapVerticalCircle className="feature-icon" />
            <p className="feature-para">30 Day Replacement</p>
          </div>
          <div className="feature-div">
            <LuTruck className="feature-icon" />
            <p className="feature-para">Free Shipping</p>
          </div>
          <div className="feature-div">
            <GiCheckedShield className="feature-icon" />
            <p className="feature-para">2 year warranty</p>
          </div>
        </div>
        <p>{singleProduct?.stock > 0 ? `Available : ${singleProduct.stock}` : `${<b>Product Out of Stock</b>}`}</p>
        <p>ID : <b>{singleProduct.id}</b></p>
        <p>Brand : <b>{singleProduct.company}</b></p>
        <hr />

        <ColorPicker productData={singleProduct} />
        <AddtoCart productData={singleProduct}/>
      </div>
    </div>

  </Wrapper>;
}





const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
