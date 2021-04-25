import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./LunchMenu/lunch.css";

class Appetizers extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Appetizer Platter | One of Each | $4.95</Card.Title>
                <Card.Text>
                  Eggroll, fired wonton, shrimp toast, crabmeat rangoon, beef
                  stick
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Pot-Stickers | 6 | $7.00</Card.Title>
                <Card.Text>
                  Dumpling filled with meat and vegetables folded into a pleated
                  crescent shape
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Crabmeat Rangoons | 6 | $5.95</Card.Title>
                <Card.Text>Half Order | $3.55</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Egg Roll | 1 | $1.50</Card.Title>
                <Card.Text>Contains peanut butter</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Fried Wonton | 8 | $3.95</Card.Title>
                <Card.Text>Half Order | $2.65</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Shrimp Toast | 6 | $5.25</Card.Title>
                <Card.Text>Half Order | $2.85</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Beef Sticks | 4 | $6.25</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Appetizers;
