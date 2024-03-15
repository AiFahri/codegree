import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/Ai/BCC Internship - Codegree/my-react-app/src/variants";

const data = [
  {
    name: "Rina Sugiyem",
    img: "src/assets/unsplash_mentor.png",
    job: "Mentor Back End",
    archivement: (
      <ul>
        <li>- Juara 1 Web Development Fasilkom UI Competition</li>
        <li>- Juara 1 Data Science Kaggle Competition</li>
        <li>- Juara 3 International UI/UX Competition Harvard University</li>
      </ul>
    ),
    univ: "Universitas Indonesia",
    faculty: "Fakultas Ilmu Komputer",
    logo: "src",
  },
  {
    name: "Rina Sugiyem",
    img: "src/assets/unsplash_mentor.png",
    job: "Mentor Back End",
    archivement: (
      <ul>
        <li>- Juara 1 Web Development Fasilkom UI Competition</li>
        <li>- Juara 1 Data Science Kaggle Competition</li>
        <li>- Juara 3 International UI/UX Competition Harvard University</li>
      </ul>
    ),
    univ: "Universitas Indonesia",
    faculty: "Fakultas Ilmu Komputer",
    logo: "src",
  },
  {
    name: "Rina Sugiyem",
    img: "src/assets/unsplash_mentor.png",
    job: "Mentor Back End",
    archivement: (
      <ul>
        <li>- Juara 1 Web Development Fasilkom UI Competition</li>
        <li>- Juara 1 Data Science Kaggle Competition</li>
        <li>- Juara 3 International UI/UX Competition Harvard University</li>
      </ul>
    ),
    univ: "Universitas Indonesia",
    faculty: "Fakultas Ilmu Komputer",
    logo: "src",
  },
  {
    name: "Rina Sugiyem",
    img: "src/assets/unsplash_mentor.png",
    job: "Back End",
    archivement: (
      <ul>
        <li>- Juara 1 Web Development Fasilkom UI Competition</li>
        <li>- Juara 1 Data Science Kaggle Competition</li>
        <li>- Juara 3 International UI/UX Competition Harvard University</li>
      </ul>
    ),
    univ: "Universitas Indonesia",
    faculty: "Fakultas Ilmu Komputer",
    logo: "src",
  },
];

const Mentor_card = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
          Mentor <span className="text-blue-lp">Codegree</span>
        </h3>
        <p className="text-ml text-grey-txt">
          Codegree hadir dengan berbagai mentor berkualitas dengan berbagai
          pencapaian dan berasal dari universitas ternama.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <div className="w-5/6 m-auto">
          <div className="mt-15">
            <Slider
              {...settings}
              className="grid grid-cols-2 md:grid-cols-5 mx-10"
            >
              {data.map((d) => (
                <div
                  key={d.name}
                  className="bg-white h-[500px]  text-black rounded-xl"
                >
                  <div className="h-40 bg-blue-cd flex justify-center items-center rounded-3xl">
                    <img src={d.img} alt="" className="h-40 w-full" />
                  </div>

                  <div className="flex flex-col  justify-center  p-4">
                    <p className="text-lg text-left font-semibold">{d.name}</p>
                    <p className="text-left text-xs mt-0">{d.job}</p>
                    <p className="text-left text-xs text-gray-500 mt-4">
                      {d.archivement}
                    </p>
                  </div>
                  <div className="flex p-4">
                    <img src="./src/assets/logo_ui.png" />
                    <div className="pl-4 text-left ">
                      <p className="text-base font-semibold">{d.univ}</p>
                      <span className="text-xs ">{d.faculty}</span>
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

export default Mentor_card;
