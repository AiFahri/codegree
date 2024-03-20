import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { handleQuestion } from "../../../api/services/question";

const Question = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            type={"button"}
            className="mt-6"
            variation={"back"}
            onClick={() => navigate("/acc_success")}
          >
            <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Apakah kamu pernah memiliki pengalaman belajar coding sebelumnya?
          </h2>

          <br></br>
          <Button
            type={"text"}
            className="mt-6 text"
            variation={"secondary"}
            onClick={() => navigate("/question2")}
          >
            Belum sama sekali.
          </Button>
          <Button
            type={"text"}
            className="mt-6"
            variation={"secondary"}
            onClick={() => navigate("/question2")}
          >
            Pernah, tapi baru belajar dasar saja.
          </Button>
          <Button
            type={"text"}
            className="mt-6"
            variation={"secondary"}
            onClick={() => navigate("/question2")}
          >
            Saya sudah memahami coding dengan baik.
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
