import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Acc_Success from "./home/Acc_Success";
import Question from "./home/Question";

import LoginPage from "./components/pages/LoginPage";

import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <>
      <Header />

      <Acc_Success />
      {/* <Question />
      <RegisterPage />
      <LoginPage /> */}
    </>
  );
}

export default App;
