import { combineReducers } from 'redux';
import {productListReducer, productDetailReducer} from './product'

export default combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer
})