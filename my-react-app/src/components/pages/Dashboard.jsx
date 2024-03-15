import { useNavigate } from "react-router-dom";

import Navbar from "../shared/Navbar";
import Banner from "../ui/Banner";
import Mentor_card from "../ui/Mentor_card";
import Testimoni from "../ui/Testimoni";
import Footers from "../shared/Footers";
const Dashboard = () => {
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
        <Mentor_card />
        <Testimoni />
        <Footers />
      </div>
    </>
  );
};
export default Dashboard;
