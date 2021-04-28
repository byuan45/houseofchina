import React, { Component } from "react";
import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";

class LunchBeef extends Component {
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
                <Card.Title>Garden Beef | $7.95</Card.Title>
                <Card.Text>
                  Sliced beef marinated in special garlic sauce served on a bed
                  of lettuce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Pepper Beef | $7.95</Card.Title>
                <Card.Text>
                  Sliced beef with green peppers, tomatoes, and onions
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Hunan Beef | $7.95
                </Card.Title>
                <Card.Text>
                  Sliced beef, broccoli, mushrooms, and baby corn with spicy hot
                  pepper sauce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Beef with Chinese Vegetables | $7.95</Card.Title>
                <Card.Text>Beef with assorted vegetables</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Ming’s Beef | $7.95</Card.Title>
                <Card.Text>
                  Beef with mushrooms, bamboo shoots and onions garnished with
                  fried rice sticks
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Mongolian Beef | $7.95</Card.Title>
                <Card.Text>Beef and onions with fried rice sticks</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Beef and Chicken | $7.95</Card.Title>
                <Card.Text>
                  Sauteed beef and chicken with assorted vegetables
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Broccoli Beef | $7.95</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LunchBeef;
