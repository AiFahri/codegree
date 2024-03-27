import React from "react";
import MainLayout from "../layout/Main_layout";
import LoginForm from "../auth/Login_form";
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
