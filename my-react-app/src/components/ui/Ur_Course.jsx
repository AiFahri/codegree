// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Button from "./Button";

const data = [
  {
    title: "Memulai Bahasa Pemrograman Java",
    img: "src/assets/java.png",
    description: (
      <p>
        Pelajari konsep pemrograman dasar dengan bahasa Java untuk melatih skill
        fundamentalmu dalam dunia coding.
      </p>
    ),
    registered: "src/assets/people_grup.png",
    total: "215+ org",
  },
];

const Ur_Course = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <div className="bg-white h-[500px] w-3/4 flex justify-center items-center  mx-auto text-black rounded-xl">
          {data.map((d) => (
            <div key={d.title} className="">
              <div className="">
                <img src={d.img} alt="" className="w-1/2" />
              </div>

              <div className="flex flex-col  justify-between  p-4 w-1/2">
                <p className="text-lg text-center font-semibold">{d.title}</p>
                <p className="text-center text-xs text-gray-500 mt-4">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Ur_Course;
