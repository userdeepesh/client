import { Nav } from 'rsuite';
import React from 'react';

const Navbar = () => (
  <Nav defaultActiveKey="Home">
    <Nav.Item eventKey="Home">Home</Nav.Item>
    <Nav.Item eventKey="News">News</Nav.Item>
    <Nav.Item eventKey="Solutions">Solutions</Nav.Item>
    <Nav.Item eventKey="Products">Products</Nav.Item>
    <Nav.Item eventKey="About">About</Nav.Item>
  </Nav>
);
export default Navbar;

