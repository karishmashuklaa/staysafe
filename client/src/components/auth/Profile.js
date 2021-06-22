import React, {useState, useEffect} from 'react'
import '../../App.css'
import { Form, Row, Col, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import FormContainer from '../layout/FormContainer'
import Message from '../layout/Message'
import Loader from '../layout/Loader'
import {getUserDetails} from '../../actions/user'

const Profile = ({history}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {name,email,password,confirmPassword} = form
    const [message, setMessage] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    const dispatch = useDispatch()

    useEffect(() => {
        // if ser is not logged in
        if(!userInfo) {
            history.push('/login')
        } else {
            if(!user || !user.name) {
                dispatch(getUserDetails('profile'))
            } else {
              
            }
        }
    }, [history, userInfo, dispatch, user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = (e) => {
       e.preventDefault()
       if(password != confirmPassword) {
           setMessage('Passwords do not match')
       } else {
            console.log('Updating')
       }
      
    }

    return (
        <Row>
             <Col md={3}>
                 <h2>USER PROFILE</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitForm}>
            <Form.Group controlId="name">
                    <Form.Label>Full Name </Form.Label>
                        <Form.Control
                        type="name"
                        name="name"
                        value={name}
                        placeholder="Enter your full name"
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address </Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email address"
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password </Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your new password"
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password </Form.Label>
                        <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Re enter your new password"
                        onChange={handleChange}
                        />
                </Form.Group>
                <Button type='submit' variant='primary' className="mt-3" > 
                	UPDATE
                </Button>
            </Form>
             </Col>
             <Col md={9}>
                 <h2>YOUR ORDERS</h2>
             </Col>
        </Row>
    )
}

export default Profile
