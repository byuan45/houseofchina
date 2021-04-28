import React, { Component } from "react";
import {
  Card,
  Accordion,
  Jumbotron,
  ListGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Appetizers from "./Menu/appetizers";

import LunchSpecials from "./Menu/LunchMenu/lunchSpecial";
import LunchPork from "./Menu/LunchMenu/lunchPork";
import LunchChicken from "./Menu/LunchMenu/lunchChicken";
import LunchSeafood from "./Menu/LunchMenu/lunchSeafood";
import LunchBeef from "./Menu/LunchMenu/lunchBeef";
import LunchEgg from "./Menu/LunchMenu/lunchEgg";
import LunchChowMein from "./Menu/LunchMenu/lunchChowMein";
import LunchVegetarian from "./Menu/LunchMenu/lunchVegetarian";

import "./menu.css";

import KidsMenu from "./Menu/kidsMenu";
import Soup from "./Menu/soup";
import American from "./Menu/american";

class Menu extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h4>Healthy Food Made From Fresh Ingredients.</h4>
          <p>Low in Fat, Oil and Cholesterol</p>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col>
              <ListGroup variant="flush" className="block-example border border-dark">
                <ListGroup.Item>
                  <a href="#appetizers">Appetizers</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#soup">Soups</a>
                </ListGroup.Item>
                <Accordion defaultActiveKey="0">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Lunch
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <ListGroup.Item>
                        <a href="#lunchSpecial">Specials</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchBeef">Beef Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchPork">Pork Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchChicken">Chicken Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchSeafood">Seafood Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchEggFooYoung">Egg Foo Young Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchChowMein">Chow Mein Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#lunchVegetarian">Vegetarian Plate</a>
                      </ListGroup.Item>
                    </div>
                  </Accordion.Collapse>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Dinner
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <ListGroup.Item>
                        <a href="#dinnerSpecial">Specials</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerBeef">Beef Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerPork">Pork Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerChicken">Chicken Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerSeafood">Seafood Plate</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerEggFooYoung">Egg Foo Young</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerChowMein">Chow Mein</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <a href="#dinnerVegetarian">Vegetarian</a>
                      </ListGroup.Item>
                    </div>
                  </Accordion.Collapse>
                </Accordion>
                <ListGroup.Item>
                  <a href="#kidsMenu">Kids Menu</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#american">American</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col xs={10}>
              <h4 id="appetizer"> Appetizers</h4>
              <Appetizers></Appetizers>
              <h4 id="soup"> Soups</h4>
              <Soup></Soup>

              <h3> Lunch</h3>
              <p>
                *entrees are served with fried wonton, fried rice, tea, and egg
                drop soup
              </p>
              <h4 id="lunchSpecial"> Daily Specials | $7.95</h4>
              <LunchSpecials></LunchSpecials>
              <h4 id="lunchBeef"> Beef</h4>
              <LunchBeef></LunchBeef>
              <h4 id="lunchPork"> Pork</h4>
              <LunchPork></LunchPork>
              <h4 id="lunchChicken"> Chicken</h4>
              <LunchChicken></LunchChicken>
              <h4 id="lunchSeafood"> Seafood</h4>
              <LunchSeafood></LunchSeafood>
              <h4 id="lunchEggFooYoung"> Egg Foo Young</h4>
              <LunchEgg></LunchEgg>
              <h4 id="lunchChowMein">
                {" "}
                Chow Mein (noodle) or Chop Suey (rice)
              </h4>
              <LunchChowMein></LunchChowMein>
              <h4 id="lunchVegetarian"> Vegetarian</h4>
              <LunchVegetarian></LunchVegetarian>
              <h4 id="american"> American</h4>
              <American></American>
              <h4 id="kidsMenu"> Kids Menu</h4>
              <KidsMenu></KidsMenu>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Menu;
