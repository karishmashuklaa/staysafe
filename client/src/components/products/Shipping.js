import React,{useState} from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import FormContainer from '../layout/FormContainer'

const Shipping = () => {

    const [form,setForm] = useState({
      address: '',
      city: '',
      postalCode: '',
      country: ''
    })
    const {address,city,postalCode,country} = form

    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log('Shipping submitted')
    }


    return (
        <FormContainer>
        <h1> Shipping Details </h1>
        <Form onSubmit={submitForm}>
            <Form.Group controlId="text">
                <Form.Label>Address</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    name="address"
                    value={address}
                    placeholder="Enter your address"
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group controlId="text">
                <Form.Label>City </Form.Label>
                    <Form.Control
                    required
                    type="text"
                    name="city"
                    value={city}
                    placeholder="Enter your city"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="text">
                <Form.Label>Postal Code </Form.Label>
                    <Form.Control
                    required
                    type="text"
                    name="postalCode"
                    value={postalCode}
                    placeholder="Enter your postal code"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group controlId="text">
                <Form.Label>Country </Form.Label>
                    <Form.Control
                    required
                    type="text"
                    name="country"
                    value={country}
                    placeholder="Enter your country"
                    onChange={handleChange}
                    />
            </Form.Group>
            <Button type='submit' variant='primary' className="mt-3">
            Submit
            </Button>
        </Form>
    </FormContainer>
    )
}

export default Shipping
