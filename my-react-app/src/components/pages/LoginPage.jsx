import React from "react";
import MainLayout from "../components/layout/MainLayout.jsx";
import LoginForm from "../auth/LoginForm";
const LoginPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col items-center w-full ">
        <LoginForm />
      </main>
    </MainLayout>
  );
};

export default LoginPage;
