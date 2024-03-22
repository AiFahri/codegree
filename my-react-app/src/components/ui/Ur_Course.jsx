// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import Image from "../../../src/assets/image3.svg";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Book from "../../../src/assets/book_5.svg";
import Kuis from "../../../src/assets/quiz.svg";
import ProgressBar from "./ProgressBar";

// const data = [
//   {
//     title: "Memulai Bahasa Pemrograman Java",
//     img: "src/assets/java.png",
//     description: (
//       <p>
//         Pelajari konsep pemrograman dasar dengan bahasa Java untuk melatih skill
//         fundamentalmu dalam dunia coding.
//       </p>
//     ),
//     registered: "src/assets/people_grup.png",
//     total: "215+ org",
//   },
// ];

const Ur_Course = () => {
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
        <div className="text-black">
          <div class="w-[100%] flex justify-center">
            <div class="shadow-lg w-[80%] grid grid-cols-2 divide-x divide-gray-300 p-3 rounded-lg">
              <div class="p-10">
                <p class="border-b-2 border-black  mb-2 font-bold text-left">
                  Materi
                </p>
                <div class="grid"></div>
                <img src={Image} class="rounded-md" />
                <h3 className="text-left text-xl font-bold mt-4">
                  Memulai Bahasa Pemograman java
                </h3>
                <p className="text-left mt-2">
                  Pelajari konsep pemrograman dasar dengan bahasa Java untuk
                  melatih skill fundamentalmu dalam dunia coding.
                </p>
                <ProgressBar />
              </div>
              <div class="p-10">
                <p class="border-b-2 border-black  mb-2 font-bold text-left ">
                  Chapter
                </p>
                <div class="grid grid-rows-6 gap-8 h-[100%]">
                  <Button
                    type={"button"}
                    className="flex justify-between border-2 p-3 rounded-lg items-center"
                    variation={"secondary"}
                    onClick={() => navigate("/course")}
                  >
                    1. Konsep Pemrograman Dasar{" "}
                    <span className="flex text-xs border border-blue-cd p-1 rounded">
                      <img src={Book} />
                      Materi
                    </span>
                  </Button>
                  <Button
                    type={"button"}
                    className="flex justify-between border-2 p-3 rounded-lg items-center"
                    variation={"secondary"}
                    onClick={() => navigate("/quiz")}
                  >
                    2. Tipe Data{" "}
                    <span className="flex text-xs border border-blue-cd p-1 rounded">
                      <img src={Kuis} />
                      Kuis
                    </span>
                  </Button>
                  <Button
                    type={"button"}
                    className="flex justify-between border-2 p-3 rounded-lg items-center"
                    variation={"secondary"}
                    onClick={() => navigate("/course")}
                  >
                    3. Input & Output{" "}
                    <span className="flex text-xs border border-blue-cd p-1 rounded">
                      <img src={Book} />
                      Materi
                    </span>
                  </Button>
                  <Button
                    type={"button"}
                    className="flex justify-between border-2 p-3 rounded-lg items-center"
                    variation={"secondary"}
                    onClick={() => navigate("/quiz")}
                  >
                    4. java.util.Scanner?{" "}
                    <span className="flex text-xs border border-blue-cd p-1 rounded">
                      <img src={Kuis} />
                      Kuis
                    </span>
                  </Button>
                  <Button
                    type={"button"}
                    className="flex justify-between border-2 p-3 rounded-lg items-center"
                    variation={"secondary"}
                    onClick={() => navigate("/course")}
                  >
                    5. Seleksi{" "}
                    <span className="flex text-xs border border-blue-cd p-1 rounded">
                      <img src={Book} />
                      Materi
                    </span>
                  </Button>
                  <Button
                    type={"button"}
                    className="flex justify-between border-2 p-3 rounded-lg items-center"
                    variation={"secondary"}
                    onClick={() => navigate("/quiz")}
                  >
                    6. Switch Case{" "}
                    <span className="flex text-xs border border-blue-cd p-1 rounded">
                      <img src={Kuis} />
                      Kuis
                    </span>
                  </Button>
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
