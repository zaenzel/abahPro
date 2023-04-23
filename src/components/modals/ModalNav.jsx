import React from "react";
import Button from "../button/Button";
import "./modalNav.css";
import { useNavigate } from "react-router-dom";

const ModalNav = ({ menu }) => {
  const navigate = useNavigate();

  const clicked = (link) => {
    navigate(link), (menu = "menu hide");
  };

  return (
    <div className={menu}>
      <ul className="wrap-items">
        <li onClick={(e) => clicked("listproperti")}>Daftar Propeti</li>
        <li onClick={(e) => clicked("listblog")}>Blog</li>
        <li>
          <Button word={"Hubungi Kami"} />
        </li>
      </ul>
    </div>
  );
};

export default ModalNav;
