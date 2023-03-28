import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl">
        <Navbar />
        <div className="sm:pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
