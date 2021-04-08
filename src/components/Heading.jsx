import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import { RiContactsBookLine } from "react-icons/ri";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">
          ADDRESS BOOK{" "}
          <RiContactsBookLine
            style={{ margin: "20px" }}
            className=" align-center"
          />
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add Contact
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
