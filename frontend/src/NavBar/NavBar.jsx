import React, { useState } from "react";

import Logo from "../assets/logo.svg";
import Structure from "./StructureNavBar";
import VectorFalse from "../assets/VectorFalse.svg";
import VectorTrue from "../assets/VectorTrue.svg";

import "./NavBarStyle.css";

const NavBar = () => {
  const [structure, setStructure] = useState(Structure);

  const handleToggle = (id) => {
    setStructure((prevStructure) =>
      prevStructure.map((item) =>
        item.id === id ? { ...item, state: !item.state } : item
      )
    );
  };

  return (
    <div>
      <img src={Logo} alt="Logo" className="Logo" />
      <ul className="navList">
        {structure.map((item) => (
          <li key={item.id}>
            <div className="first">
              {Object.keys(item.child).length > 0 && (
                <button onClick={() => handleToggle(item.id)}>
                  <img
                    src={item.state ? VectorTrue : VectorFalse}
                    alt="Vector"
                  />
                </button>
              )}
              <img src={item.iconSRC} alt={item.name} />
              <span>{item.name}</span>
            </div>
            {item.state && (
              <ul>
                {Object.values(item.child).map((child) => (
                  <li key={child.id}>
                    <div className="second">
                      <img src={child.iconSRC} alt={child.name} />
                      <span>{child.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
