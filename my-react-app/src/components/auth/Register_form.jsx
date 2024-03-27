import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import router from "../../routes/Router";
import Image from "../../../src/assets/rafiki.svg";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Acc_Success from "../pages/question/Acc_Success";
import { handleRegister } from "../../api/services/auth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleRegister(form);

      setTimeout(() => {
        console.log(form);
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-32 w-auto" src={Image} />
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
              type="name"
              label={"Nama Lengkap"}
              name={"name"}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required={true}
              autoComplete="no"
            />
          </div>
          <div>
            <Input
              type="email"
              label={"E-mail"}
              name={"email"}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required={true}
            />
          </div>

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
