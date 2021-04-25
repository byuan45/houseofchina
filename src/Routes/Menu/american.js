import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

class American extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Fried Shrimpa | $12.55</Card.Title>
                <Card.Text>12 pieces of crispy, fried shrimp with a choice of french fries or rice</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Fried Chicken Wings| $11.75</Card.Title>
                <Card.Text>10 pieces of crispy, fried wings with a choice of french fries or rice</Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
        
      </Container>
    );
  }
}

export default American;
