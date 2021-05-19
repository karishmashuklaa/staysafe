import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_ERROR
} from '../actions/constants'


const initialState = {
    products : [],
    product: null,
    loading: true,
    error: {}
}

const productListReducer = (state=initialState, action) => {
    const { type, payload } = action

    switch(type){
        case PRODUCT_LIST_REQUEST:
            return{
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return{
                loading: false,
                products: payload
            }
        case PRODUCT_LIST_ERROR:
            return{
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default productListReducer
