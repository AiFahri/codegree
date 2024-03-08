import { useState } from "react";
import "./App.css";
import Header from "./components/components/Header";
import Acc_Success from "./home/Acc_Success";
import Question from "./home/Question";

import LoginPage from "./components/pages/LoginPage";

import Register from "./Register";

function App() {
  return (
    <>
      {/* <Header />

      <Acc_Success />
      <Question /> */}

      <LoginPage />
    </>
  );
}

export default App;
