import React from "react";
import Footer from "../Footer/index.js";
import Header from "../Header/index.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
