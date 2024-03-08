import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import RegisterForm from "../auth/RegisterForm.jsx";

const RegisterPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col items-center w-full">
        <RegisterForm />
      </main>
    </MainLayout>
  );
};

export default RegisterPage;
