import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home"> Home</Link>
        </li>

        <li>
          <Link to="/blog"> Blog</Link>
        </li>

        <li>
          <Link to="/nosotros"> Nosotros</Link>
        </li>

        <li>
          <Link to="/contacto"> Contacto </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
