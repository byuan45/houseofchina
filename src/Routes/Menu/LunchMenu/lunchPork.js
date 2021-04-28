import React, { Component } from "react";
import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";

class lunchPork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid className="block-example border-bottom border-dark">
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Sweet and Sour Pork | $7.55</Card.Title>
                <Card.Text>Served in a red sauce</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Pork with Chinese Vegetables | $7.55</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Mo Sho Pork | $7.95</Card.Title>
                <Card.Text>
                  Fancy flavored eggs with pork, cabbage, onions, carrots and
                  shredded bamboo shoots.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Hunan Pork | $7.55
                </Card.Title>
                <Card.Text>
                  Pork with fresh broccoli, baby corn, and mushroom in a hot
                  pepper sauce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Princess Pork | $7.55
                </Card.Title>
                <Card.Text>Breaded pork with hot garlic pepper sauce</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default lunchPork;
