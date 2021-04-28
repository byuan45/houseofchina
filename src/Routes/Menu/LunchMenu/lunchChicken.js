import React, { Component } from "react";
import { ListGroup, Card, Col, Row, Container } from "react-bootstrap";

class LunchChicken extends Component {
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
                <Card.Title>Snow Peas with Chicken | $7.55</Card.Title>
                <Card.Text>
                  Tender chicken sauteed with peapods and bamboo shoots
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Almond Chicken | $7.55</Card.Title>
                <Card.Text>
                  Tender chicken sauteed with bamboo shoots and green pepper
                  with almonds
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Garlic Chicken | $7.55</Card.Title>
                <Card.Text>
                  Tender chicken sauteed with mushrooms and water chestnuts
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Cashew Chicken | $7.55</Card.Title>
                <Card.Text>
                  Deep-fried dark-meat chicken with cashew nuts and assorted
                  vegetables
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Chicken with Chinese Vegetables | $7.55</Card.Title>
                <Card.Text>Assorted vegetables in light sauce</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Sweet and Sour Chicken | $7.55</Card.Title>
                <Card.Text>
                  Chicken with carrots, onions, and pineapple
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Mongolian Chicken | $7.55</Card.Title>
                <Card.Text>
                  Sliced chicken breasts with onions and fried rice sticks
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Snow White Chicken | $7.55</Card.Title>
                <Card.Text>
                  Sliced chicken breast cooked with mushrooms, carrots, bamboo
                  shoots, and peapods
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Mandarin Chicken | $7.75
                </Card.Title>
                <Card.Text>
                  Deep-fried chicken sauteed with water chestnuts and broccoli
                  in a special hot pepper sauce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title> Chicken with Broccoli | $7.55</Card.Title>
                <Card.Text>Chicekn in a white sauce </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "red" }}>
                  Hot Plate Sizzling | $7.75
                </Card.Title>
                <Card.Text>
                  Sliced chicken breast sauteed with carrots, water chestnuts
                  and broccoli with a special sweet and spicy sauce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LunchChicken;
