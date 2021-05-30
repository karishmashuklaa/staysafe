import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cart'


const Cart = ({match,location,history}) => {
    const productId = match.params.id 
    console.log(location)
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log('CartItems' , cartItems) 

    useEffect(() => {
        if(productId){
        dispatch(addToCart(productId, qty))
        }
    },[dispatch,productId,qty])
    

    return (
        <div>
           Cart Screen 
        </div>
    )
}

export default Cart
