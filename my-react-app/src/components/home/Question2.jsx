import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Question2 = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <button className="bg-transparent flex positon relative right-[80%] top-0">
            <a href="./Question">
              <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
            </a>
          </button>
          <Button
            type={"button"}
            className="mt-6"
            variation={"back"}
            // onClick={() => navigate("/question")}
            onClick={() => navigate("/Acc_Success")}
          >
            <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Apakah kamu pernah memiliki pengalaman belajar coding sebelumnya?
          </h2>

          <br></br>
          <button
            type="text"
            className="flex w-full justify-center rounded-md bg-white-600 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Belum sama sekali.
          </button>
          <br></br>
          <button
            type="text"
            className="flex w-full justify-center rounded-md bg-white-600 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Pernah, tapi baru belajar dasar saja.
          </button>
          <br></br>
          <button
            type="text"
            className="flex w-full justify-center rounded-md bg-white-600 px-3 py-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Saya sudah memahami coding dengan baik.
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question2;
