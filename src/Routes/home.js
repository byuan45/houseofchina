import React, { Component } from "react";
import {
  Container,
  Card,
  Accordion,
  Jumbotron,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import resturant from "../img/resturant.jpg";
import food from "../img/front3.jpg";

class Home extends Component {
  render() {
    return (
      <Container className="mt-0 pl-0 pr-0 pt-0" fluid>
        <h3
          style={{
            position: "absolute",
            top: "12%",
            left: "1%",
            color: "#584D4A ",
            right: 0,
            bottom: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Healthy food made from fresh ingredients
        </h3>
        <Image src={food} fluid />

        <Container fluid style={{ marginTop: "5em" }}>
          <Row>
            <Col>
              <h2>Our Hours</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>Closed on Tuesdays</ListGroup.Item>
                <ListGroup.Item>
                  Lunch
                  <p>11 am – 2:30 pm</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  Dinner
                  <p>
                    Sunday – Thursday 4:30 – 9:00 pm <br></br>Friday and
                    Saturday 4:30 – 10:00 pm
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  Delivery Hours
                  <p>
                    Lunch 11-1:30 Minimum Order $15 <br></br>Dinner 4:30 – 9:00
                    pm Minimum Order $20
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h2>Contact Us</h2>
              <h5>Phone: (563) 557-8275</h5>
              <Form>
                <Form.Group controlId="Name">
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="name"
                        placeholder="Enter First Name"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        type="name"
                        placeholder="Enter Last Name"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <h2>Our Location</h2>
              <h5>170 John F Kennedy Rd, Dubuque, IA 52002</h5>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
