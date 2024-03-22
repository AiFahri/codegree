import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Image from "../../../src/assets/rina_round.png";

const data = [
  {
    name: "Rina Sugiyem",
    img: Image,
    univ: "Universitas Padjajaran",
    review:
      "Codegree membuat saya memahami programming dengan asyik! Mentor yang ada juga sangat informatif!",
    rating: "5.0",
  },
  {
    name: "Rina Sugiyem",
    img: Image,
    univ: "Universitas Padjajaran",
    review:
      "Codegree membuat saya memahami programming dengan asyik! Mentor yang ada juga sangat informatif!",
    rating: "5.0",
  },
  {
    name: "Rina Sugiyem",
    img: Image,
    univ: "Universitas Padjajaran",
    review:
      "Codegree membuat saya memahami programming dengan asyik! Mentor yang ada juga sangat informatif!",
    rating: "5.0",
  },
];

const Testimoni = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h3 className="text-black text-3xl font-bold  mb-2 text-center">
          Testimonial Pengguna <span className="text-blue-cd">Codegree</span>
        </h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <div className="w-8/12 m-auto">
          <div className="mt-15 mb-24">
            <Slider
              {...settings}
              className="grid grid-cols-2 md:grid-cols-5 mx-10"
            >
              {data.map((d) => (
                <div
                  key={d.name}
                  className="bg-white h-[300px]  text-black rounded-3xl shadow-md"
                >
                  <div className="flex justify-between">
                    <div className="h-36 flex pl-10 pt-10 rounded-t-xl">
                      <img
                        src={d.img}
                        alt=""
                        className="h-12 w-12 rounded-full"
                      />

                      <div className=" pl-4 pt-1">
                        <p className="text-xl text-left font-semibold">
                          {d.name}
                        </p>
                        <span className="text-left text-gray-500">
                          {d.univ}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center m-10 border border-black w-20 h-8 rounded-2xl">
                      <img src="./src/assets/kid_star.svg" />
                      <p>{d.rating}</p>
                    </div>
                  </div>

                  <div className="  mb-24 pb-24 px-20 mt-0">
                    <p className="text-xl  font-semibold">{d.review}</p>
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

export default Testimoni;
