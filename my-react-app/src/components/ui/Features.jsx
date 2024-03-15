// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/Ai/BCC Internship - Codegree/my-react-app/src/variants";

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
        <h3 className="text-black text-3xl font-bold  mb-8 text-center mt-40">
          Fitur Unggulan <span className="text-blue-lp">Codegree</span>
        </h3>

        <div class="flex flex-row justif mt-16 gap-0 ">
          <div className="basis-4/12 ">
            <div class="shadow-lg bg-white rounded-3xl p-5 w-[50%] mx-auto">
              <img
                class="w-[70%]  mx-auto rounded-lg"
                src="../src/assets/mentoring.svg"
              />
            </div>
            <h2 class="mt-4 text-2xl text-center text-black font-bold">
              Mentoring
            </h2>
            <p class="text-center text-gray-500 mt-3 px-16">
              Mentor berkualitas siap menjawab apapun kesulitanmu!
            </p>
          </div>
          <div className="basis-4/12">
            <div class="shadow-lg bg-white rounded-3xl p-5 w-[50%] mx-auto">
              <img
                class="w-[70%]  mx-auto rounded-lg"
                src="../src/assets/book.svg"
              />
            </div>
            <h2 class="mt-4 text-2xl text-center text-black font-bold">
              Terstruktur
            </h2>
            <p class="text-center text-gray-500 mt-3 px-16 ">
              Course yang ada didesign mulai dari dasar hingga yang kompleks
            </p>
          </div>
          <div className="basis-4/12">
            <div class="shadow-lg bg-white rounded-3xl p-5 w-[50%] mx-auto">
              <img
                class="w-[70%]  mx-auto rounded-lg"
                src="./src/assets/ps.svg"
              />
            </div>
            <h2 class="mt-4 text-2xl text-center text-black font-bold">
              Gamifikasi
            </h2>
            <p class="text-center text-gray-500 mt-3 px-16">
              Pembelajaran dilakukan secara menyenanagkan melalui kuis
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Features;
