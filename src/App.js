import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Routes/menu";
import Home from "./Routes/home";
import Location from "./Routes/location";
import Career from "./Routes/career";
import Logo from "./img/logo.png";

console.log(Logo);
function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/houseofchina">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          House of China
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/houseofchina">Menu</Nav.Link>
            {/* <Nav.Link href="/career">Career</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Menu></Menu>
      <Router>
        <div>
          <Switch>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
