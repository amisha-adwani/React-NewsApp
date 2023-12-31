import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Newsify</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/technology">
                <Nav.Link>Technology</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/business">
                <Nav.Link>Business</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/entertainment">
                <Nav.Link>Entertainment</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/health">
                <Nav.Link>Health</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/science">
                <Nav.Link>Science</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sports">
                <Nav.Link>Sports</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
