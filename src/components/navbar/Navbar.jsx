import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import HamburgerBtn from "../hamburger-btn/HamburgerBtn";
import ModalNav from "../modals/ModalNav";
import "./navbar.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useState(() => {
    window.addEventListener("scroll", controlNavbar);
    return window.removeEventListener("scroll", controlNavbar);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setVisible]);

  return (
    <nav className={`container-nav ${visible ? "top" : "hidden"}`}>
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
