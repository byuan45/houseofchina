import React, { Component } from "react";
import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";

class lunchEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Chicken Chow Mein | $7.55</Card.Title>
                <Card.Text>
                  Chinese stir-fried noodles with vegetables and chicken
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Beef Chow Mein | $7.95</Card.Title>
                <Card.Text>
                  Chinese stir-fried noodles with vegetables and beef{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Pork Chow Mein | $7.55</Card.Title>
                <Card.Text>
                  Chinese stir-fried noodles with vegetables and pork
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Shrimp Chow Mein | $7.95</Card.Title>
                <Card.Text>
                  Chinese stir-fried noodles with vegetables and shrimp
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Vegetable Chow Mein | $7.55</Card.Title>
                <Card.Text>
                  Chinese stir-fried noodles with vegetables
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default lunchEgg;
