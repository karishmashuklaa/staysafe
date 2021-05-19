import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../products/Products'
import { useDispatch, useSelector } from 'react-redux'
import listProducts from '../../actions/product'

const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error,loading,products} = productList

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])

    return (
        <div>
             <h1>Featured Masks</h1>
             {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> : 
             <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
            }
        </div>
    )
}

export default Home
