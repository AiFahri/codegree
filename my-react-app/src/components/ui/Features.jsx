// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Mentoring from "../../../src/assets/mentoring.svg";
import book from "../../../src/assets/book.svg";
import game from "../../../src/assets/ps.svg";

const Features = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="text-center my-8"
    >
      <div className="mb-40">
        <h3 className="text-black text-3xl font-bold  mb-8 text-center mt-20">
          Fitur Unggulan <span className="text-blue-cd">Codegree</span>
        </h3>

        <div className="flex flex-row justif mt-16 gap-0 ">
          <div className="basis-4/12 ">
            <div className="shadow-lg bg-white rounded-3xl p-5 w-[50%] mx-auto">
              <img class="w-[70%]  mx-auto rounded-lg" src={Mentoring} />
            </div>
            <h2 className="mt-4 text-2xl text-center text-black font-bold">
              Mentoring
            </h2>
            <p className="text-center text-gray-500 mt-3 px-16">
              Mentor berkualitas siap menjawab apapun kesulitanmu!
            </p>
          </div>
          <div classNameName="basis-4/12">
            <div className="shadow-lg bg-white rounded-3xl p-5 w-[50%] mx-auto">
              <img className="w-[70%]  mx-auto rounded-lg" src={book} />
            </div>
            <h2 className="mt-4 text-2xl text-center text-black font-bold">
              Terstruktur
            </h2>
            <p className="text-center text-gray-500 mt-3 px-16 ">
              Course yang ada didesign mulai dari dasar hingga yang kompleks
            </p>
          </div>
          <div classNameName="basis-4/12">
            <div className="shadow-lg bg-white rounded-3xl p-5 w-[50%] mx-auto">
              <img className="w-[70%]  mx-auto rounded-lg" src={game} />
            </div>
            <h2 className="mt-4 text-2xl text-center text-black font-bold">
              Gamifikasi
            </h2>
            <p className="text-center text-gray-500 mt-3 px-16">
              Pembelajaran dilakukan secara menyenanagkan melalui kuis
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Features;
