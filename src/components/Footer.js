import React from 'react';
import style from './footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className={style.Appfooter}>
    <div>
      <img src="http://via.placeholder.com/150x50" alt="Super Duper App Logo" />
      <nav>
        <h3>Links</h3>
        <ul>
          <li>
            <NavLink to="/" activeClassName="is-active" exact={true}>
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
