import React, {useState} from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import FormContainer from '../layout/FormContainer'
import {login} from '../../actions/user'

const Login = () => {
    const DEFAULT_DATA = {
        email: '',
        password: ''
    }
    const [form, setForm] = useState(DEFAULT_DATA)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
       console.log('Submitted')
    }

    return (
        <FormContainer>
            <h1> Sign In </h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address </Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        placeholder="Enter your email address"
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password </Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        value={form.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        />
                </Form.Group>
            </Form>
            <Button type='submit' variant='primary'> Sign In </Button>
        </FormContainer>
    )
}

export default Login
