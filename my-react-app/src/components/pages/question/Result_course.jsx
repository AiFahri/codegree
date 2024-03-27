import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { getRecomend } from "../../../api/services/recomend";

const ResultCourse = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleRecomend = async () => {
    try {
      const response = await getRecomend();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.error === "data not found") {
        setData([]);
      }
    }
  };
  useEffect(() => {
    getRecomend();
  }, []);

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Kami menemukan course yang cocok untukmu!
          </h2>
          <div className="shadow-lg p-10 mt-2">
            <div className="flex text-black mt-4">
              <img />
              <span className="text-start">
                <h2 className=" text-xl font-bold">Java Untuk Pemula</h2>
                <p className="text-sm">
                  Pelajari konsep pemrograman dasar dengan bahasa Java untuk
                  melatih skill fundamentalmu dalam dunia coding.
                </p>
              </span>
            </div>
            <div className="text-black text-start mt-3">
              <h2 className="font-semibold">Materi :</h2>
              <div className="flex items-baseline">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] mb-4 bg-gray-300 font-bold">
                  1
                </div>
                <p className="ml-2 ">Konsep Dasar Pemrograman</p>
              </div>
              <div className="flex items-baseline">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] mb-4 bg-gray-300 font-bold">
                  2
                </div>
                <p className="ml-2 ">Input-Output</p>
              </div>
              <div className="flex items-baseline">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] mb-4 bg-gray-300 font-bold">
                  3
                </div>
                <p className="ml-2 ">Seleksi</p>
              </div>
              <div className="flex items-baseline">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] mb-4 bg-gray-300 font-bold">
                  4
                </div>
                <p className="ml-2 ">Perulangan</p>
              </div>
            </div>
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
      </div>
    </React.Fragment>
  );
};
export default ResultCourse;
