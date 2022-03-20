import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Page3 = ({msg, handleInputValue}) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <div>{msg}</div>
            <Form.Control value={msg} onChange={handleInputValue} />
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Page3;