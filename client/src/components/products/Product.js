import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from './Rating';
import products from '../../utils/products';


const Product = ({ match }) => {
    const product = products.find((prod) => prod._id == match.params.id )
    return (
        <div>
             <Link to='/' className='btn btn-primary my-3'>
                 Go Back
            </Link>

             <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>


                <Col md={3}>
                    <ListGroup variant="flush">

                    <ListGroup.Item className="text-white">
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item className="text-white">
                        <Rating 
                        value={product.rating} 
                        text={`${product.numReviews} reviews`} 
                        color={'#f8e825'} />
                    </ListGroup.Item>

                    <ListGroup.Item className="text-white">
                        Category: {product.category}
                    </ListGroup.Item>

                    <ListGroup.Item className="text-white">
                        Description: {product.description}
                    </ListGroup.Item>

                    <ListGroup.Item className="text-white">
                        Usecase: {product.usecase}
                    </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>

                            <ListGroup.Item className="text-white">
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>Rs {product.price}</strong>
                                    </Col>
                                </Row>

                                </ListGroup.Item>
                                    <ListGroup.Item className="text-white">
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <Button type="button" className="btn btn-success"
                                disabled={product.countInStock == 0}>Add To Cart</Button>
                            </ListGroup>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Product;
