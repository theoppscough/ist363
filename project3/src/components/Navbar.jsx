import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/log">Log</Link>
    <Link to="/progress">Progress</Link>
  </nav>
);

export default Navbar;