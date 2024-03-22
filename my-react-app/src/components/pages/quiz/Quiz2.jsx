import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Image from "../../../../src/assets/arrow_back.svg";
import Image1 from "../../../../src/assets/Group 46.png";
import Navbar_dashboard from "../../shared/Navbar";

const Quiz2 = () => {
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
          <img src={Image1} />
          <br></br>
          <div>
            <p className="text-black text-base">Pilih Jawaban :</p>
          </div>
          <div className="flex justify-center gap-6">
            <Button
              type={"text"}
              className="mt-6"
              variation={"secondary"}
              onClick={"hover:blue-cd"}
            >
              );
            </Button>
            <Button
              type={"text"}
              className="mt-6"
              variation={"secondary"}
              onClick={"hover:blue-cd"}
            >
              )
            </Button>
            <Button
              type={"text"}
              className="mt-6"
              variation={"secondary"}
              onClick={"hover:blue-cd"}
            >
              ;
            </Button>
          </div>
          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/quiz3")}
          >
            Submit
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz2;
