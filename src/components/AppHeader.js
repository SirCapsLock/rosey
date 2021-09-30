import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

export default class AppHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Container>
            <Row>
              <Col>
                <Navbar.Toggle
                  arira-controls="baseic-navbar-nav"
                  className=""
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Products</Nav.Link>
                    <Nav.Link>Stores</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
              <Col>
                <NavDropdown title="Shopping Lists" id="basic-nav-dropdown">
                  <NavDropdown.Item>Shopping List 9/30</NavDropdown.Item>
                  <NavDropdown.Item>Pirito Party</NavDropdown.Item>
                </NavDropdown>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
