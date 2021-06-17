import { combineReducers } from 'redux';
import {productListReducer, productDetailsReducer} from './product'
import {cartReducer} from './cart'
import {userLoginReducer} from './user'

export default combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})