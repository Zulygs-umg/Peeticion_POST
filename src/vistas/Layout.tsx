import React from "react";
import Menu from "../vistas/Menu";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Menu /> {}
      <div className="container mt-3">
        <Outlet /> {}
      </div>
    </>
  );
};

export default Layout;
