import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../products/Products'
import products from '../../utils/products'

const Home = () => {
    return (
        <div>
             <h1>Featured Masks</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
