import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Navbar from "../../shared/Navbar";

const Quiz2 = () => {
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
          <div>
            <p className="text-black text-base">Pilih Jawaban :</p>
          </div>
          <div className="flex justify-center gap-6">
            <Button
              type={"text"}
              className="mt-6"
              variation={"secondary"}
              onClick={() => navigate("/done")}
            >
              );
            </Button>
            <Button
              type={"text"}
              className="mt-6"
              variation={"secondary"}
              onClick={() => navigate("/done")}
            >
              )
            </Button>
            <Button
              type={"text"}
              className="mt-6"
              variation={"secondary"}
              onClick={() => navigate("/done")}
            >
              ;
            </Button>
          </div>
          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/done")}
          >
            Submit
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz2;
