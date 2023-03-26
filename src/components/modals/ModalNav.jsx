import React from "react";
import "./modalNav.css";

const ModalNav = ({ menu }) => {
  return (
    <div className={menu}>
      <ul className="wrap-items">
        <li>Daftar Propeti</li>
        <li>Tentang Kami</li>
        <li>
          <button className="btn-call-modal">Hubungi Kami</button>
        </li>
      </ul>
    </div>
  );
};

export default ModalNav;
