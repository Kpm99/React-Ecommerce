const ProductReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_API_DATA":
            const featuredProducts = action.payload.filter((currItem) => {
                return currItem.featured === true;
            })

            console.log("setApiData",action.payload);
            

            return {
                ...state,
                loading: false,
                products: action.payload,
                featuredProducts,
                error: false
            }
        case "API_ERROR":
            return {
                ...state,
                loading: false,
                error: true
            }

        case "SET_SINGLE_PRODUCT_LOADING":
            return {
                ...state,
                singleProductLoading: true,
                singleProductError: false
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProductLoading: false,
                singleProduct: action.payload,
                singleProductError: false
            }
        case "SET_SINGLE_PRODUCT_ERROR":
            return {
                ...state,
                singleProductLoading: false,
                singleProductError: true
            }
        default:
            return state;
    }

}

export default ProductReducer;