import { combineReducers } from 'redux';
import productListReducer from './product'

export default combineReducers({
    productList: productListReducer
})