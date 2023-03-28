import React, { useState } from "react";
import Button from "../button/Button";
import HamburgerBtn from "../hamburger-btn/HamburgerBtn";
import ModalNav from "../modals/ModalNav";
import "./navbar.css";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("hamburger-line unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [menu, setMenu] = useState("menu hide");

  const clickedMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("hamburger-line clicked");
      setMenu("menu show");
    } else {
      setBurgerClass("hamburger-line unclicked");
      setMenu("menu hide");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="container-nav">
      <div className="logo-nav">
        <h1 className="title">AbahPro</h1>
        <ul className="items-nav hidden sm:flex">
          <li>Daftar Propeti</li>
          <li>Tentang Kami</li>
          <li>
            <Button word={"Hubungi Kami"} />
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="relative flex items-center sm:hidden">
        <HamburgerBtn clickedMenu={clickedMenu} burgerClass={burgerClass} />
        <ModalNav menu={menu} />
      </div>
    </nav>
  );
};

export default Navbar;
