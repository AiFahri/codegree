import React from "react";
import MainLayout from "../components/layout/MainLayout.jsx";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col items-center w-full md:w-screen">
        <RegisterForm />
      </main>
    </MainLayout>
  );
};

export default RegisterPage;
