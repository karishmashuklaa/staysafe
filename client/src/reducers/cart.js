import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/cartConstants'

export const cartReducer = (state={cartItems:[]}, action) => {

    const {type,payload} = action

    switch(type){
        case CART_ADD_ITEM:
             // item is the current product
            const item = payload
            // Check if the item exists
            const existItem =  state.cartItems.find(i => i.product ===  item.product) // product is the id (Check cart action for better understanding)

            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(i =>
                        i.product === existItem.product ? item : i)
                }
            }
            return{
                ...state,
                cartItems: [...state.cartItems, item]
            }
        default:
            return state
    }
}