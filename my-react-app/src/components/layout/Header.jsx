import { useState } from "react";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full flex justify-center items-center p-2 bg-blue-cd shadow-md">
        <div className="w-screen mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img
              action="#"
              src="../src/assets/Group 24.svg"
              alt="Logo"
              className="h-8 w-50 ml-2"
            />
            {/* <h1 className="text-2xl font-bold text-gray-800">Codegree</h1> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
