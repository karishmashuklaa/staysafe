import { combineReducers } from 'redux';
import {productListReducer, productDetailsReducer} from './product'
import {cartReducer} from './cart'

export default combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})