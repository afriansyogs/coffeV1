import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-base-100">
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </div>
    );
};

export default MainLayout;