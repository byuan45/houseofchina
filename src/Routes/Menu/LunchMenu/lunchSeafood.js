import React, { Component } from "react";
import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";

class LunchSeafood extends Component {
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
                <Card.Title> Shrimp with Lobster Sauce | $7.95</Card.Title>
                <Card.Text>
                  Shrimp with mushrooms, peas, and carrots in egg flowers
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Shrimp with Chinese Vegetables | $7.95</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Sweet and Sour Shrimp | $7.95</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Snow White Shrimp | $7.95</Card.Title>
                <Card.Text>
                  Sauteed shrimp with peapods, bamboo shoots and carrots with
                  house special white sauce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Double Delights | $7.95</Card.Title>
                <Card.Text>
                  Shrimp and sliced chicken with cabbage, peapods, and carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Hot Sizzling Shrimp | $7.95
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LunchSeafood;
