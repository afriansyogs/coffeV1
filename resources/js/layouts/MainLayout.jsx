import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
          <Navbar />
          <div className="">{children}</div>
        </>
    );
};

export default MainLayout;
