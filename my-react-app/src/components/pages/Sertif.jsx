import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Navbar from "../shared/Navbar";
import Image from "../../../src/assets/arrow_back.svg";
import Image1 from "../../../src/assets/sertif_dummy.png";

const Sertif = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex min-h-full flex-col justify-center py-12 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            type={"button"}
            className="mt-6"
            variation={"back"}
            onClick={() => navigate("/quiz2")}
          >
            <img src={Image} alt="" width="25px" />
          </Button>

          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Selamat !
          </h2>
          <h3 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Anda telah menyelesaikan Memulai Programming dengan Java
          </h3>
          <img src={Image1} className="w-[500px] h-[250px] mx-auto" />

          <br></br>

          <Button
            type={"text"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/course")}
          >
            Unduh Sertifikat
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sertif;
