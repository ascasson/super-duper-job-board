import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="App-footer">
    <div>
      <img src="http://via.placeholder.com/150x50" alt="Super Duper App Logo" />
      <nav>
        <h3>Links</h3>
        <ul>
          <li>
            <NavLink to="/" activeClassName="is-active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" activeClassName="is-active">
              Add a job
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
