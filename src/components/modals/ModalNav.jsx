import React from "react";
import Button from "../button/Button";
import "./modalNav.css";

const ModalNav = ({ menu }) => {
  return (
    <div className={menu}>
      <ul className="wrap-items">
        <li>Daftar Propeti</li>
        <li>Tentang Kami</li>
        <li>
          <Button word={"Hubungi Kami"} />
        </li>
      </ul>
    </div>
  );
};

export default ModalNav;
