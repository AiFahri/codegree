import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Image from "../../../../src/assets/bro.svg";
import Navbar from "../../shared/Navbar";
const Acc_Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 mt-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-60 w-auto" src={Image} />
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Akun berhasil dibuat!
          </h2>
          <h3 className="mt-5 text-center text-xl font leading-9 tracking-tight text-gray-900">
            Sekarang, jawab beberapa pertanyaan agar kami dapat menyesuaikan
            pembelajaran untukmu.
          </h3>
          <Button
            type={"button"}
            className="mt-6"
            variation={"primary"}
            onClick={() => navigate("/question")}
          >
            Mulai
          </Button>
          <p className="mt-5 text-center text-base font leading-9 tracking-tight text-gray-900">
            Psst, ini tidak sampai 5 menit!
          </p>
        </div>
      </div>
    </>
  );
};

export default Acc_Success;
