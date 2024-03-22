import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Navbar from "../../shared/Navbar";
import Image from "../../../../src/assets/arrow_back.svg";
import Image1 from "../../../../src/assets/java_1.svg";
import Image2 from "../../../../src/assets/maki_caution.svg";

const Quizz = () => {
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
            onClick={() => navigate("/course")}
          >
            <img src={Image} alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Kerjakan Bab Konsep Pemrograman Dasar ini untuk bisa lanjut ke Bab
            Tipe Data.
          </h2>
          <img src={Image1} className="w-[150px] h-[150px] mx-auto" />

          <br></br>
          <div>
            <img src={Image2} className="w-[50px] h-[50px] " />
            <p className="text-black text-base">
              Quiz ini berisi 20 soal.{" "}
              <span className="text-blue-cd font-bold">
                Kerjakan dengan Teliti!
              </span>{" "}
            </p>
          </div>
          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/quiz2")}
          >
            Mulai Kuis
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quizz;
