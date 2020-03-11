import React from "react";
import Navbar from "react-bootstrap/Navbar";


function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Google Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/books">Saved</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Nav;