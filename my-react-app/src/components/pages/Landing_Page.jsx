import React from "react";
import Button from "../ui/Button";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";
import Banner from "../ui/Banner";
import Features from "../ui/Features";

import Testimoni from "../ui/Testimoni";
import Mentor_card from "../ui/Mentor_card";
import Frequently from "./Frequently";
import Footers from "../shared/Footers";

const Landing_Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto mt-12">
        <Banner
          // banner={"../src/assets/amigo.svg"}
          heading={"Mulai pengalaman programming bersama Codegree"}
          subheading={" Menyenangkan, interaktif, tanpa bosan."}
          btn={"Belajar Sekarang"}
        />
        <Features />
        <Testimoni />
        <Mentor_card />
        <Banner
          // banner={"../src/assets/amigo.svg"}
          heading={"Codegree Monthly Subscription"}
          subheading={
            "Dapatkan Infinite Hearts hingga akses unlimited untuk semua kelas!"
          }
          btn={"Selengkapnya"}
        />
        <Frequently />
        <Footers />
      </div>

      {/* <Mentor /> */}
      {/* <div className="bg-blue-lp bg-cover">
        <div className="block">
          <p>Fitur Codegree</p>
        </div>
        <div className="flex justify-content:space-between ">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Landing_Page;
