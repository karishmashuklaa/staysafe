import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userLoginFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {
    cart: { cartItems: cartItemsFromStorage},
    userLogin: {userInfo: userLoginFromStorage },
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;