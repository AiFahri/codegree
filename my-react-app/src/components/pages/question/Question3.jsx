import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const Question3 = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            type={"button"}
            className="mt-6 "
            variation={"back"}
            onClick={() => navigate("/question2")}
          >
            <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Apa yang mau kamu pelajari di sini?
          </h2>

          <br></br>
          <Button
            type={"text"}
            className="mt-6 text"
            variation={"secondary"}
            onClick={() => navigate("/result")}
          >
            Untuk mengerti Basic Pemrograman
          </Button>
          <Button
            type={"text"}
            className="mt-6"
            variation={"secondary"}
            onClick={() => navigate("/result")}
          >
            Untuk Mendevelop Website
          </Button>
          <Button
            type={"text"}
            className="mt-6"
            variation={"secondary"}
            onClick={() => navigate("/result")}
          >
            Untuk bekerja dengan software dan database
          </Button>
          <Button
            type={"text"}
            className="mt-6"
            variation={"secondary"}
            onClick={() => navigate("/result")}
          >
            Yang Lainnya
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question3;
