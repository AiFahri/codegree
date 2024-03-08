import React from "react";

const Acc_Success = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-60 w-auto" src=".\src\assets\bro.svg" />
        <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Akun berhasil dibuat!
        </h2>
        <h3 className="mt-5 text-center text-xl font leading-9 tracking-tight text-gray-900">
          Sekarang, jawab beberapa pertanyaan agar kami dapat menyesuaikan
          pembelajaran untukmu.
        </h3>
        <br></br>
        <button
          type="text"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Mulai
        </button>
        <p className="mt-5 text-center text-base font leading-9 tracking-tight text-gray-900">
          Psst, ini tidak sampai 5 menit!
        </p>
      </div>
    </div>
  );
};

export default Acc_Success;
