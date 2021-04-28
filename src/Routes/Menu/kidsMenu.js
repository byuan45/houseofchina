import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

class kidsMenu extends Component {
  render() {
    return (
      <Container fluid className="block-example border-bottom border-dark">
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Small Kids' Combo | $3.75</Card.Title>
                <Card.Text>French fries and three chicken nuggets</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>French Fries | $3.05</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Chicken Nuggets | $3.75</Card.Title>
                <Card.Text>Six chicken nuggets</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Large Kids' Combo | $5.95</Card.Title>
                <Card.Text>French fries and six chicken nuggets</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default kidsMenu;
