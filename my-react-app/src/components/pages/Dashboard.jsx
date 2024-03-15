import { useNavigate } from "react-router-dom";

import Navbar from "../shared/Navbar";
import Banner from "../ui/Banner";
import Mentor_card from "../ui/Mentor_card";
import Testimoni from "../ui/Testimoni";
import Footers from "../shared/Footers";
import Course_card from "../ui/Course_card";
import Ur_Course from "../ui/Ur_Course";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto mt-12 ">
        <Banner
          // banner={"../src/assets/amigo.svg"}
          heading={"Mulai pengalaman programming bersama Codegree"}
          subheading={" Menyenangkan, interaktif, tanpa bosan."}
          className="bg-white"
          btn={"Belajar Sekarang"}
        />
        <Ur_Course />
        <Course_card />
        <Mentor_card />
        <Testimoni />
        <Footers />
      </div>
    </>
  );
};
export default Dashboard;
