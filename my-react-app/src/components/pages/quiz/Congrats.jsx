import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Navbar from "../../shared/Navbar";

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            type={"button"}
            className="mt-6"
            variation={"back"}
            onClick={() => navigate("/quiz2")}
          >
            <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Selamat ! Anda Telah Menyelesaikan Bab Konsep Pemrograman Dasar
          </h2>
          <img
            src="../src/assets/rafiki_2.svg"
            className="w-[350px] h-[350px] mx-auto"
          />

          <br></br>

          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/course")}
          >
            Lanjut ke Bab Tipe Data
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Congrats;
