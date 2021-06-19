import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Profile = () => {
    return (
        <Row>
             <Col className="text-white" md={3}>
                 USER PROFILE
             </Col>
             <Col className="text-white" md={9}>
                 YOUR ORDERS
             </Col>
        </Row>
    )
}

export default Profile
