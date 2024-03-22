import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Java",
    img: "src/assets/java.png",
    description: (
      <p>
        Bahasa Java adalah salah satu bahasa pemrograman yang paling populer dan
        banyak digunakan di dunia, dan terus menjadi pilihan utama bagi
        pengembang perangkat lunak dalam berbagai jenis proyek pengembangan.
      </p>
    ),
    registered: "src/assets/people_grup.png",
    total: "215+ org",
  },
  {
    name: "Javascript",
    img: "src/assets/java.png",
    description: (
      <p>
        JavaScript adalah bahasa pemrograman tingkat tinggi yang digunakan untuk
        membuat dan mengontrol konten interaktif pada halaman web.
      </p>
    ),
    registered: "src/assets/people_grup.png",
    total: "215+ org",
  },
  {
    name: "Flutter",
    img: "src/assets/java.png",
    description: (
      <p>
        Flutter adalah kerangka kerja pengembangan perangkat lunak open-source
        yang dibuat oleh Google, digunakan untuk membangun antarmuka pengguna
        (UI) yang kaya dalam aplikasi mobile, web, dan desktop dengan
        menggunakan satu basis kode sumber.
      </p>
    ),
    registered: "src/assets/people_grup.png",
    total: "310+ org",
  },
];

const Course_card = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h3 className="text-black text-3xl font-bold  mb-2  text-center">
          Pilihan Course
        </h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <div className="w-5/6 m-auto ">
          <div className="mt-15">
            <Slider
              {...settings}
              className="grid grid-cols-3 md:grid-cols-5 mx-10"
            >
              {data.map((d) => (
                <div
                  key={d.name}
                  className="bg-white h-[450px]  text-black rounded-xl "
                >
                  <div className="grid grid-rows-3">
                    <div className="h-40 bg-white flex justify-center rounded-3xl">
                      <img src={d.img} alt="" className="h-40 w-full" />
                    </div>

                    <div className="flex flex-col  justify-center  px-4">
                      <p className="text-lg text-center font-semibold">
                        {d.name}
                      </p>
                      <p className="text-center text-xs text-gray-500 mt-4">
                        {d.description}
                      </p>
                    </div>
                    <div className="flex px-4 justify-center items-center">
                      <Button
                        type={"button"}
                        className="border border-gray-400 mt-6 w-[100px] h-[50px]"
                        onClick={() => navigate("/course")}
                      >
                        Mulai
                      </Button>

                      <div className="pl-4 pt-4 mt-4 text-left ">
                        <img src={d.registered} className="" />
                        <p className="text-xs ">{d.total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Course_card;
