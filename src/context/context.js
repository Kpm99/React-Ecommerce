import { createContext, useContext } from "react";
import { useEffect, useState, useReducer } from 'react'
import reducer from '../reducer/productReducer'
import axios from "axios";
const AppContext = createContext();
const AppProvider = ({ children }) => {
    const initialState   = {
        loading: false,
        products: [],
        featuredProducts: [],
        error: false,
        singleProductLoading: false,
        singleProductError: false,
        singleProduct: {},
    }

    
    const [state, dispatch] = useReducer(reducer, initialState );
    useEffect(() => {
        loadData();
        
    }, [])

     const loadData = async () => {
        try {
             dispatch({ type: "LOADING" });
            const res = await axios.get('https://api.pujakaitem.com/api/products');

            const products = await res.data;
            console.log("products", products);
            dispatch({ type: "SET_API_DATA", payload: products })

        } catch (error) {
            console.log("error while fetching data", error);
            dispatch({ type: "API_ERROR" })
        }
    }

     const loadSingleProduct = async (url) => {
        try {
            dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" })
            const res = await axios.get(url);
            const singleProduct = await res.data;
            console.log("single product", singleProduct);
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })

        } catch (error) {
            console.log("error while fetching single product", error);
            dispatch({ type: "SET_SINGLE_PRODUCT_ERROR" })
        }

    }

    return (
        <AppContext.Provider value={{...state,loadSingleProduct}}>
            {children}
        </AppContext.Provider>
    )

}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobalContext };
