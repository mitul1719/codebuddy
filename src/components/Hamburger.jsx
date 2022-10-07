import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./styles.css";
import Menu from "./Menu";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="ham__main">
      <section onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </section>
      {showMenu && (
        <Menu
          items={[
            "Settings",
            "Safe Search",
            "Search History",
            "My Bing",
            "Privacy",
            "Feedback",
            "Customise your Homepage",
          ]}
        />
      )}
    </main>
  );
};

export default Hamburger;
