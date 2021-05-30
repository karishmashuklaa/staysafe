import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id,qty) => async(dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    // saving cart items in local storage 
    // local storage takes key value pairs : cartItems is key 
    // cart is the cartReducer 
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) 
}





// getState lets you get any part of the state. Similar to useSelector 