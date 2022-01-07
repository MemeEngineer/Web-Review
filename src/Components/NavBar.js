import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/movieDisplay"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Movies
      </NavLink>

      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
