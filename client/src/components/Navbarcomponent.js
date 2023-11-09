import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import "../assets/styles/Navbar.css";
import { User } from "./Svgs";
import { useContext } from "react";
import { ClientContext } from "../ClientContext";

function Navbarcomponent() {
  const { CartProducts, setCartProducts,isLogged, token, setOrders } =
    useContext(ClientContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container className="con">
        <Link to="/" className="mr-auto name">
          DIRAAZ
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Link to="/" className="navlink">
              Home
            </Link>
            <Link to="/our-story" className="navlink">
              Our Story
            </Link>
            <Link to="/products" className="navlink">
              Our Products
            </Link>
            <Link to="/opportunities" className="navlink">
              Opportunities
            </Link>
            <Link to="/blog" className="navlink">
              Blog
            </Link>
            <Link to="/contact-us" className="navlink">
              Contact Us
            </Link>
          </Nav>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                list="searchId"
              />
              <datalist id="searchId">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </datalist>
              {/* <Button variant="outline-success" className="btn-search">
                Search
              </Button> */}
            </InputGroup>
          </Form>
          <ButtonGroup className="my-2 mx-lg-2">
            {!isLogged?<Link to="/login" className="navlink rounded-circle">
              <User height="40" width="40" stroke="red" />
            </Link>:
            <Link to="/account" className="navlink rounded-circle">
              <User height="40" width="40" stroke="green" />
              <sup className="bg-danger text-white py-1 px-2 rounded-circle">
             { CartProducts.length}
              </sup>
            </Link>}
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;
