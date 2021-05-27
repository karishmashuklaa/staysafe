import { combineReducers } from 'redux';
import {productListReducer, productDetailsReducer} from './product'

export default combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})