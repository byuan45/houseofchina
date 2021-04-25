import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

class soup extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Sizzling Rice Soup | $3.25 | $4.75 | $5.75</Card.Title>
                <Card.Text>Chicken broth blended with chicken, celery, bamboo shoots, carrots, water chestnuts, and sizzling golden rice crust</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Won Ton Soup | $3.50 | $5.25 | $6.00</Card.Title>
                <Card.Text>Soup with carrots, mushrooms, peapods, and bamboo shoots</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{color: "red"}}>Hot and Sour Soup | $3.50 | $5.25 | $6.00</Card.Title>
                <Card.Text>Soup with bean curd, vegetables, and egg flowers in a full-bodied broth </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Egg Drop Soup | $2.55 | $4.25 | $5.25</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Peapod Bean Curd Soup | $2.75 | $4.25 | $5.25</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>San Shan Soup | $2.75 | $4.25 | $5.25</Card.Title>
                <Card.Text>Soup with shrimp, crab sticks, and scallops with vegetables in chicken broth </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col xs={3}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Four Season Soup | $8.55</Card.Title>
                <Card.Text>Soup for two with shrimp, scallops, crabmeat, and vegetables in a full-bodied broth</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default soup;
