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
        <h1 class="text-3xl font-bold ">Course Kamu</h1>
        <div class="w-[100%] flex justify-center">
          <div class="shadow-lg w-[80%] grid grid-cols-2 divide-x divide-gray-300 p-10 rounded-lg">
            <div class="p-10">
              <p class="border-b-2 border-black  mb-2 font-bold">Materi</p>
              <div class="grid"></div>
              <img src="../src/assets/image3.svg" class="rounded-md" />
              <h3>Memulai Bahasa Pemoraman java</h3>
              <p>
                Pelajari konsep pemrograman dasar dengan bahasa Java untuk
                melatih skill fundamentalmu dalam dunia coding.
              </p>
              <div class="flex w-[100%] justify-between">
                <div class="bg-gray-800 w-[100%] rounded-lg">
                  <div class="w-[20%] bg-blue-200 rounded-lg">
                    <span>p</span>
                  </div>
                </div>
                <p class="ml-2">20%</p>
              </div>
            </div>
            <div class="p-10">
              <p class="border-b-2 border-black  mb-2 ">Chapter</p>
              <div class="grid grid-rows-6 gap-8 h-[100%]">
                <div class=" flex justify-between border-2 p-2 rounded-lg items-center">
                  1 <span>2</span>
                </div>
                <div class=" flex justify-between border-2 p-2 rounded-lg items-center">
                  1 <span>2</span>
                </div>
                <div class=" flex justify-between border-2 p-2 rounded-lg items-center">
                  1 <span>2</span>
                </div>
                <div class=" flex justify-between border-2 p-2 rounded-lg items-center">
                  1 <span>2</span>
                </div>
                <div class=" flex justify-between border-2 p-2 rounded-lg items-center">
                  1 <span>2</span>
                </div>
                <div class=" flex justify-between border-2 p-2 rounded-lg items-center">
                  1 <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Ur_Course;
