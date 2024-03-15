import React from "react";

import Navbar from "../shared/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
