import { useNavigate } from "react-router-dom";

import Mentor_card from "../ui/Mentor_card";
import Testimoni from "../ui/Testimoni";
import Footers from "../shared/Footers";
import Course_card from "../ui/Course_card";
import Ur_Course from "../ui/Ur_Course";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Banner_dashboard from "../ui/Banner_dashboard";
import Navbar_dashboard from "../shared/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar_dashboard />
      <div className=" max-w-screen-2xl mx-auto mt-12 ">
        <Banner_dashboard
          // banner={"../src/assets/amigo.svg"}
          variation={"primary"}
          heading={"Mulai pengalaman programming bersama Codegree"}
          subheading={" Menyenangkan, interaktif, tanpa bosan."}
          className="bg-white text-black"
          btn={"Belajar Sekarang"}
        />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-left my-8"
        >
          <h3 className="text-black text-3xl font-bold   text-left pl-24  mt-20">
            Course Kamu
          </h3>
        </motion.div>
        <Ur_Course />
        <Course_card />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center my-8"
        >
          <h3 className="text-black text-3xl font-bold  mb-8 text-left pl-24  mt-20">
            Mentor Pilihan
          </h3>
        </motion.div>
        <div className="mb-40">
          <Mentor_card />
          <Testimoni />
        </div>
        <Footers />
      </div>
    </>
  );
};
export default Dashboard;
