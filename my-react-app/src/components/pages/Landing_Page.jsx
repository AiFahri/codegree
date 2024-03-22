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
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import DropDownnn from "../ui/DropDownnn";
import Navbar_dashboard from "../shared/Navbar_dashboard";

const Landing_Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar_dashboard />
      <div className=" max-w-screen-2xl mx-auto mt-12">
        <Banner
          // banner={"../src/assets/amigo.svg"}
          variation={"primary"}
          heading={"Mulai pengalaman programming bersama Codegree"}
          subheading={" Menyenangkan, interaktif, tanpa bosan."}
          btn={"Belajar Sekarang"}
        />
        <Features />
        <Testimoni />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center my-8"
        >
          <h3 className="text-black text-3xl font-bold  mb-2 text-center">
            Mentor <span className="text-blue-cd">Codegree</span>
          </h3>
          <p className="text-ml text-grey-txt">
            Codegree hadir dengan berbagai mentor berkualitas dengan berbagai
            pencapaian dan berasal dari universitas ternama.
          </p>
        </motion.div>
        <Mentor_card />
        <Banner
          // banner={"../src/assets/amigo.svg"}
          variation={"primary"}
          heading={"Ayo, Pakai Free Trialmu Sekarang Juga!"}
          subheading={
            "Dengan Mengaktifkan  Monthly Subcription kamu bisa mendapatkan Infinite Hearts hingga akses unlimited untuk semua kelas!"
          }
          btn={"Berlangganan Sekarang"}
        />
        <Frequently />
        <Footers />
      </div>
    </>
  );
};

export default Landing_Page;
