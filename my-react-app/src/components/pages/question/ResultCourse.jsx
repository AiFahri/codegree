import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const ResultCourse = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Kami menemukan course yang cocok untukmu!
          </h2>
          <Button
            type={"text"}
            className="mt-6 text"
            variation={"primary"}
            onClick={() => navigate("/dashboard")}
          >
            Mulai Belajar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ResultCourse;
