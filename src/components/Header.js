import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <h1>Super duper job board</h1>
    <nav>
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
  </header>
);

export default Header;
