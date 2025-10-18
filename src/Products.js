import React from 'react';

import './product.css'
import GridVIew from "./components/GridVIew";
import { UseFilterContext } from "./context/filterContext";
import ListView from './components/ListView';
import Sort from './components/Sort';
const Products = () => {
const { filter_products,grid_view } = UseFilterContext();

console.log("filter_products:", filter_products);
console.log("grid_view:", grid_view);

 
  return (
    <div>
      <Sort />
      <div>
        filter area
      </div>
      
        {

         Array.isArray(filter_products) || filter_products.length !== 0 ? grid_view? <GridVIew products={filter_products}/>:<ListView products={filter_products}/> : ""
        }
       

    </div>
  )
};



export default Products;
