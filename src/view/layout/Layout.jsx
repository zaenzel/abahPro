import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="max-w-screen-xl">
        <div className="sm:pt-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
