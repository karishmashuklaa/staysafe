import { combineReducers } from 'redux';
import {productListReducer, productDetailsReducer} from './product'
import {cartReducer} from './cart'
import {userLoginReducer, userRegisterReducer, userDetailsReducer} from './user'

export default combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer
})