import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import HamburgerBtn from "../hamburger-btn/HamburgerBtn";
import ModalNav from "../modals/ModalNav";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
        <h1 className="title">
          <Link to={"/"}>AbahPro</Link>
        </h1>
        <ul className="items-nav hidden sm:flex">
          <li onClick={(e) => navigate("/listproperti")}>Daftar Propeti</li>
          <li onClick={(e) => navigate("/listblog")}>Blog</li>
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
