import React, { Component } from "react";
import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";

class LunchSpecials extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Monday: Three Delight</Card.Title>
                <Card.Text>
                  Shrimp, beef, and chicken with broccoli, bamboo shoots, and
                  carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Wednesday: Double Delights</Card.Title>
                <Card.Text>Shrimp and sliced chicken with vegetables</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Thursday: Sautéed Happy Family</Card.Title>
                <Card.Text>
                  Shrimp, scallops, crabsticks, and chicken with cabbage,
                  broccoli, baby corn, and mushrooms
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Friday: Sesame Chicken</Card.Title>
                <Card.Text>
                  Sliced chicken sauteed to crispness, tossed with sesame seeds
                  in garlic sauce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Saturday: Three Delight</Card.Title>
                <Card.Text>
                  Shrimp, beef, and chicken with broccoli, bamboo shoots, and
                  carrots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Sunday: Buffet</Card.Title>
                <Card.Text>
                  Buffet includes the following: Egg drop soup, Crabmeat
                  rangoons, Egg Rolls, Fried Rice, Chicken Chow Mein, Vegetable
                  Deluxe, Almond Chicken, House Special Spicy Chicken Wings,
                  Broccoli Beef, Sweet Sour Pork, Fried Chicken Wings, and Fruit
                  Cocktail
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LunchSpecials;
