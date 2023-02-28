import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <div className="general">
        <div className="container">
          <div className="home">
            <Link to="/" title="Home">
              Home
            </Link>
          </div>
          <div className="options">
            <Link to="/insert" title="Insert">
              New
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
}
