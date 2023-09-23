import React from 'react';
import './css/NavBar.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function NavBar() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <Link to='/'>
            <i className="fa fa-home nav-icon"></i>
            <span className="nav-text">Home</span>
          </Link>
        </li>

        <li>
          <Link to="/schedule">
            <i className="fa fa-calendar nav-icon"></i>
            <span className="nav-text">Schedule</span>
          </Link>
        </li>

        <li>
          <Link to="/classes">
            <i className="fa fa-dumbbell nav-icon"></i>
            <span className="nav-text">Classes</span>
          </Link>
        </li>

        <li>
          <Link to="/products">
            <i className="fab fa-product-hunt nav-icon"></i>
            <span className="nav-text">Product</span>
          </Link>
        </li>
      </ul>

      <ul className="logout">
        <li>
          <a href="#">
            <i className="fa fa-cogs nav-icon"></i>
            <span className="nav-text">Settings</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa fa-right-from-bracket nav-icon"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li>  
      </ul>
    </nav>
  )
}
