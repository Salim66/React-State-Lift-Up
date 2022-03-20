import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Data = ({msg, handleInputValue}) => {

  return (
    <Container>
        <Row className='my-5'>
            <Col md={4}>
                <Form.Control value={msg} onChange={ (e) => handleInputValue(e) } />
                <p>{msg}</p>
            </Col>
        </Row>
    </Container>
  )
};

export default Data;