import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faLock,
  faClockRotateLeft,
  faUser,
  faKey,
  faMessage,
  faHomeUser,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  Settings: faGear,
  "Safe Search": faLock,
  "Search History": faClockRotateLeft,
  "My Bing": faUser,
  Privacy: faKey,
  Feedback: faMessage,
  "Customise your Homepage": faHomeUser,
};
const Menu = ({ items = [] }) => {
  const [customiseMenu, setCustomiseMenu] = useState(false);
  return (
    <main className="menu__main">
      <ul>
        {items.map((item) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (item === "Customise your Homepage") {
                setCustomiseMenu(!customiseMenu);
              }
            }}
          >
            <FontAwesomeIcon icon={icons[item]} color="grey" />
            &nbsp; {item}
          </li>
        ))}
      </ul>

      {customiseMenu && (
        <ul style={{ marginTop: "-4rem" }}>
          {["Show Menubar", "Show News and interest", "Show homepageImage"].map(
            (item) => {
              return (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "74%",
                  }}
                >
                  {" "}
                  <p>{item}</p> <input type="checkbox" />
                </li>
              );
            }
          )}
        </ul>
      )}
    </main>
  );
};

export default Menu;
