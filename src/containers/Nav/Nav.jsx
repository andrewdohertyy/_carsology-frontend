import React from "react";
import "./Nav.scss";

const Nav = ({ title }) => {
  return (
    <div className="nav">
      <section class="top-nav">
        <div className="nav__title">{title}</div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </section>
    </div>
  );
};

export default Nav;
