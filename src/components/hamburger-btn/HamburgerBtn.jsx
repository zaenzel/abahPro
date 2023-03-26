import React from "react";
import "./hamburgerBtn.css"

const HamburgerBtn = ({ clickedMenu, burgerClass }) => {
  return (
    <button className="" onClick={clickedMenu}>
      <span className={burgerClass}></span>
      <span className={burgerClass}></span>
      <span className={burgerClass}></span>
    </button>
  );
};

export default HamburgerBtn;
