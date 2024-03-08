import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";
// import { handleLogin } from "../../api/services/auth";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // try {
    //   const response = await handleLogin(form);

    //   window.localStorage.setItem("token", response.data.token);

    //   setTimeout(() => {
    //     navigate("/");
    //   }, 1000);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-40 w-auto" src=".\src\assets\rafiki.svg" />
          {/* TITLE PART  */}
          <h2 className="mt-7 text-center text-2xl font-inter font-bold leading-9 tracking-tight text-gray-900">
            Masuk Akun Codegree
          </h2>
        </div>
      </div>

      {/* FORM PART */}
      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={(e) => handleSubmit(e)}>
          <div>
            {/* <label
              htmlFor="email"
              className="text-sm text-gray-900 font-inter font-bold flex justify-start "
            >
              Email address
            </label>
            <div className="mt-0">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}
            <Input
              type="email"
              label={"Email"}
              name={"email"}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required={true}
            />
            {/* </div> */}
          </div>
          //password
          <div>
            {/* <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm text-gray-900 font-inter font-bold flex justify-start "
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div> */}
            <div className="mt-2"></div>
            {/* <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
            <Input
              type="password"
              label={"Password"}
              name={"password"}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required={true}
            />
          </div>
          <Button
            type={"button"}
            className="mt-6"
            variation={"primary"}
            onClick={handleSubmit}
          >
            Masuk
          </Button>
          <p className="mt-10 text-center text-sm text-gray-500">
            Belum punya akun?
            <a
              href="./RegisterPage"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Daftar
            </a>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
