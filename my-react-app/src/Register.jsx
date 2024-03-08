import React from "react";
import Button from "./components/ui/Button";
const Register = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-40 w-auto" src=".\src\assets\rafiki.svg" />
          <h2 className="mt-5 text-center text-2xl font-inter font-bold leading-9 tracking-tight blue-cd text-gray-900">
            Daftar Akun Codegree
          </h2>
        </div>
      </div>
      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" action="#" method="POST">
          <div>
            <label
              htmlFor="username"
              className="text-sm text-gray-900 font-inter font-bold flex justify-start "
            >
              Nama Lengkap
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="no"
                required
                className="block w-full rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              // className="block text-sm font-medium leading-10 text-gray-900"
              className="text-sm text-gray-900 font-inter font-bold flex justify-start "
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex  justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-inter font-bold leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <Button type={"button"} className="mt-6" variation={"primary"}>
              Daftar
            </Button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Sudah punya akun?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Masuk ke akunmu
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};
export default Register;
