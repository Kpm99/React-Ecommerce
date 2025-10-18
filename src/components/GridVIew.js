import React from "react";
import { UseFilterContext } from "../context/filterContext";
import Product from "./Product";
import "./gridview.css"
const GridView = ({ products }) => {
  // const { filter_products } = UseFilterContext();

  // console.log("filter_products:", filter_products);

  // if (!Array.isArray(filter_products) || filter_products.length === 0) {
  //   return <div>No products found</div>;
  // }
  console.log("products",products);
  

  return (
    <div className="product-container-grid">

      {products.map((currProduct) => (
        <Product key={currProduct.id} {...currProduct} className="products" />
      ))}

    </div>
  );
};

export default GridView;
