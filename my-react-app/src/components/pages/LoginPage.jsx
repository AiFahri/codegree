import React from "react";
import MainLayout from "../layout/MainLayout";
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
