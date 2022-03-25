import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      param: "home"
    },
    {
      name: "About",
      param: "about"
    }
  ];

  return (
    <ul>
      {links.map(({ name, param }) => (
        <li key={param}>
          <NavLink
            activeStyle={{ fontWeight: "bold" }}
            to={`/${param}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
