import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Image from "../../../../src/assets/arrow_back.svg";
import Image1 from "../../../../src/assets/correct.svg";
import Image2 from "../../../../src/assets/Group 49.svg";
import Navbar_dashboard from "../../shared/Navbar";

const Quiz3 = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar_dashboard />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            type={"button"}
            className="mt-6"
            variation={"back"}
            onClick={() => navigate("/quiz")}
          >
            <img src={Image} alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            1. Dalam syntax konsep java untuk menampilkan output, apa syntax
            yang kurang dari gambar dibawah?
          </h2>
          <img src={Image2} />
          <br></br>
          <div className="flex border border-blue-cd rounded p-4 justify-center">
            <img src={Image1} alt="" width="25px" />
            <p className="text-black text-base font-semibold ml-4">
              Wowww, Jawabanmu Benar! :
            </p>
          </div>

          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/done")}
          >
            Lanjut
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz3;
