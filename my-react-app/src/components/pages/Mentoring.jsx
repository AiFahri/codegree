import React from "react";
import Button from "../ui/Button";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";
import Mentor_card from "../ui/Mentor_card";
import Footers from "../shared/Footers";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Title from "../ui/Title";

const Mentoring = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto mt-12">
        <div className="mt-20">
          <Title
            text1={"List Mentor"}
            text2={"Codegree"}
            variation={"secondary"}
          ></Title>
          <Title text1={"Mentor Java"} variation={"third"}></Title>
          <Mentor_card />

          <Title text1={"Mentor Java Script"} variation={"third"}></Title>
          <Mentor_card />

          <Title text1={"Mentor Flutter"} variation={"third"}></Title>
          <Mentor_card />
          <Footers />
        </div>
      </div>
    </>
  );
};

export default Mentoring;
