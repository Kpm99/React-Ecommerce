const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }

        case "GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "LIST_VIEW":
            return {
                ...state,
                grid_view: false

            }

        case 'Sort':
            if(action.payload === "lowest"){
                let temp = state.all_products;
                temp.sort((a,b)=>{
                    return a.price - b.price
                })
                return {
                    ...state,
                    filter_products:temp
                }
            }
            if(action.payload === "highest"){
                let temp = state.all_products;
                temp.sort((a,b)=>{
                    return b.price - a.price
                })
                return {
                    ...state,
                    filter_products:temp
                }
            }

            if(action.payload === "z-a"){
                let temp = state.all_products;
                temp.sort((a, b) => b.name.localeCompare(a.name));
                return {
                    ...state,
                    filter_products:temp
                }
            }

            if(action.payload === "a-z"){
                let temp = state.all_products;
               temp.sort((a, b) => a.name.localeCompare(b.name));
                return {
                    ...state,
                    filter_products:temp
                }
            }

        default:
            return state

    }


}

export default filterReducer