import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

class Career extends Component {
  render() {
    return (
      <Container>
        <h1> Join the House of China Family!</h1>
        <h2> Contact Us </h2>
        <h2> Please complete the form below</h2>
        <Form>
          <Form.Group controlId="Name">
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter First Name"
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter Last Name"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Career;
