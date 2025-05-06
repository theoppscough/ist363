import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-logo">FoodTracker</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/log">Log</Link>
      <Link to="/progress">Progress</Link>
    </div>
  </nav>
);

export default Navbar;
