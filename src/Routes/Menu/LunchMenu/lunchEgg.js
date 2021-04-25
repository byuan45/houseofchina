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
                <Card.Title>Chicken Egg Foo Young | $7.55</Card.Title>
                <Card.Text>
                  Chinese omlette dish with chicken, broccoli, peas, and carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Beef Egg Foo Young | $7.95</Card.Title>
                <Card.Text>
                  Chinese omlette dish with beef, broccoli, peas, and carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Pork Egg Foo Young | $7.55</Card.Title>
                <Card.Text>
                  Chinese omlette dish with pork, broccoli, peas, and carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Vegetable Egg Foo Young | $7.55</Card.Title>
                <Card.Text>
                  Chinese omlette dish with broccoli, peas, and carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Shrimp Egg Foo Young | $7.95</Card.Title>
                <Card.Text>
                  Chinese omlette dish with shrimp, broccoli, peas, and carrots
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
