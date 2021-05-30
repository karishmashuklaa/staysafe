import React,{ useEffect } from 'react'
import {Row,Col, Image, ListGroup,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cart'
import Message from './Message'


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
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='secondary'>
                        Your cart is empty! Please add some products to your cart.
                        <br />
                        <Link to='/'>Shop Product</Link>

                    </Message>
                ) : (
                    	<ListGroup variant='flush'>
                            {cartItems.map(item => (
                                // product is the id of the product
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>

                                        <Col md={3}>
                                            <Link to={`product/${item.product}`}
                                            className="link">{item.name}</Link>
                                        </Col>

                                        <Col md={2}>
                                            <p className="text-white">Rs {item.price}</p>
                                        </Col>

                                        <Col md={3}>
                                        <Form.Control 
                                        as="select"
                                        value={item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                // if there are 4 products in stock then this will be [0,1,2,3]
                                                [...Array(item.countInStock).keys()].map((i) => (
                                                    <option key={i+1} value={i + 1}>
                                                        {i + 1}
                                                   </option>
                                                ))
                                            }
                                        </Form.Control>
                                        </Col>

                                    </Row>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                )}
            </Col>
        </Row>
    )
}

export default Cart
