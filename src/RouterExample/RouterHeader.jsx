import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function RouterHeader() {
  return (
    // <>
    //   <div>
    //     <h1>RouterHeader</h1>

    //     {/* <NavLink to="/home">Home</NavLink>
    //     <NavLink to="/articles">Articles</NavLink> */}

    //   </div>
    // </>

    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>

      <Nav className="me-auto nav">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }>
          Home
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }>
          Articles
        </NavLink>
      </Nav>
    </Navbar>
  );
}
