
import { createContext, useEffect } from "react";
import reducer from "../reducer/filterReducer"
import { useReducer, useContext } from "react";
import { useGlobalContext } from "./context";
import { filter } from "framer-motion/client";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
    let { loading, products } = useGlobalContext();
    const initialState = {
        filter_products: [],
        products: [],
        grid_view: true,
        sorting: "lowest",
        filters: {
            text: "",
        }
    }

    // console.log("products in features", products, loading);


    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        if (products.length > 0) {
            dispatch({ type: "LOAD_PRODUCTS", payload: products })
        }

    }, [products])

    const Grid_View = () => {
        dispatch({ type: "GRID_VIEW" })

    }

    const Sorting = (e) => {
        let userValue = e.target.value;
        console.log("userValue", userValue);
        dispatch({ type: "Sort", payload: userValue })

    }

    const Filter =(e)=>{
        
        let value = e.target.value;

    }
    const List_View = () => {
        dispatch({ type: "LIST_VIEW" })

    }

    return (
        <FilterContext.Provider value={{ ...state, Grid_View, List_View, Sorting }}>
            {children}
        </FilterContext.Provider>
    )

}


const UseFilterContext = () => {
    return useContext(FilterContext);

}

export { FilterProvider, UseFilterContext }