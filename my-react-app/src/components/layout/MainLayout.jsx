import React from "react";

import Navbar from "../shared/Navbar";
import Navbar_dashboard from "../shared/Navbar_dashboard";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar_dashboard />
      {children}
    </div>
  );
};

export default MainLayout;
