import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact activeClassName="is-active" to="/">
        Go home{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="/create">
        create{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="/help">
        help{" "}
      </NavLink>
    </header>
  );
};

export default Header;
