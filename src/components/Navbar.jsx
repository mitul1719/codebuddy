import React from "react";
import Hamburger from "./Hamburger";
import "./styles.css";

const Navbar = ({ logo, menu = [], caption }) => {
  return (
    <nav className="nav">
      <main className="main">
        <section className="first">
          <img src={logo} height="30px" width="30px" />
          <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>{caption}</p>
          <ul>
            {menu.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <Hamburger />
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
