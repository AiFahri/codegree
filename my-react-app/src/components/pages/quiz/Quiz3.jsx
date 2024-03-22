import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Navbar from "../../shared/Navbar";

const Quiz3 = () => {
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
            onClick={() => navigate("/quiz")}
          >
            <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            1. Dalam syntax konsep java untuk menampilkan output, apa syntax
            yang kurang dari gambar dibawah?
          </h2>

          <br></br>
          <div className="border border-blue-cd rounded p-4">
            <img src=".\src\assets\correct.svg" alt="" width="25px" />
            <p className="text-black text-base font-semibold">
              Wowww, Jawabanmu Benar! :
            </p>
          </div>

          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/sertif")}
          >
            Lanjut
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz3;
