import React from "react";
import MainLayout from "../layout/Main_layout.jsx";
import RegisterForm from "../auth/Register_form.jsx";

const RegisterPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col items-center w-full mt-6">
        <RegisterForm />
      </main>
    </MainLayout>
  );
};

export default RegisterPage;
