import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import router from "../../routes/Router";

import Input from "../ui/Input";
import Button from "../ui/Button";
import Acc_Success from "../../home/Acc_Success";
// import { handleLogin } from "../../api/services/auth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    // confirmpassword:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      // const response = await handleLogin(form);
      // window.localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        navigate("/acc_success");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-40 w-auto" src=".\src\assets\rafiki.svg" />
          {/* TITLE PART  */}
          <h2 className="mt-7 text-center text-2xl font-inter font-bold leading-9 tracking-tight text-gray-900">
            Daftar Akun Codegree
          </h2>
        </div>
      </div>

      {/* FORM PART */}
      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Input
              type="text"
              label={"Username"}
              name={"name"}
              autoComplete="no"
            />
          </div>
          <div>
            <Input
              type="email"
              label={"Email"}
              name={"email"}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required={true}
            />
          </div>
          //password
          <div>
            <Input
              type="password"
              label={"Password"}
              name={"password"}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required={true}
            />
          </div>
          {/* <div>
            <Input
              type="password"
              label={"Confirm Password"}
              name={"confirmpassword"}
              onChange={(e) =>
                setForm({ ...form, confirmpassword: e.target.value })
              }
              required={true}
            />
          </div> */}
          <Button
            type={"button"}
            className="mt-6"
            variation={"primary"}
            // onClick={() => navigate("/question")}
            onClick={handleSubmit}
          >
            Daftar
          </Button>
          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah punya akun?
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Masuk ke akunmu
            </a>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RegisterForm;
