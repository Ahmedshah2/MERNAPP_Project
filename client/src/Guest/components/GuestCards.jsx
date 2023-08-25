import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../User/Components/card.css'

export default function GuestCards({ name, image }) {
    return (
        <Row className="m-1 user-card">
            <Col className='m-1'>
                <Link to={`/${name.split(' ').join('-')}`} className='text-decoration-none'>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{ height: '250px', padding: '10px' }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}
