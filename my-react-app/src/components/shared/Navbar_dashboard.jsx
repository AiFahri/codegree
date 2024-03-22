import React from "react";
import Button from "../ui/Button";
import Logo from "../../../src/assets/Group 24.svg";
import Heart from "../../../src/assets/Heart.svg";
import Akun from "../../../src/assets/Vector (1).svg";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar_dashboard = () => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 z-20 w-full h-50 flex justify-center items-center p-4 bg-blue-cd shadow-md">
      <div className="w-screen px-3 md:px-5 2xl:w-[1440px] flex justify-between">
        {/* LEFT SECTION - LOGO */}
        <div className="flex gap-2 md:gap-4 items-center">
          <a href="#">
            <img action="#" src={Logo} alt="Logo" className="h-8 w-50 ml-2" />
          </a>
        </div>

        {/* RIGHT SECTION - BUTTONS */}

        <div className="flex gap-2 md:gap-4 h-100">
          <Button
            type={"button"}
            variation={"home"}
            onClick={() => navigate("/dashboard")}
          >
            Home
          </Button>

          {isAuthenticated ? (
            <Button
              type={"button"}
              variation={"secondary"}
              onClick={() => handleLogout()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              type={"button"}
              variation={"login"}
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar_dashboard;
