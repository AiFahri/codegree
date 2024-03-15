// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/Ai/BCC Internship - Codegree/my-react-app/src/variants";
import Button from "./Button";

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
        <h3 className="text-black text-3xl font-bold  mb-2 mt-24 text-center">
          Course Kamu
        </h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <div className="bg-white h-[500px] w-3/4 flex justify-center items-center  mx-auto text-black rounded-xl">
          {data.map((d) => (
            <div key={d.name} className="">
              <div className="">
                <img src={d.img} alt="" className="w-1/2" />
              </div>

              <div className="flex flex-col  justify-between  p-4">
                <p className="text-lg text-center font-semibold">{d.name}</p>
                <p className="text-center text-xs text-gray-500 mt-4">
                  {d.description}
                </p>
              </div>
              <div className="flex p-4">
                <Button
                  type={"button"}
                  className="border border-gray-400 mt-6 w-[120px]"
                  onClick={() => navigate("/course")}
                >
                  Mulai
                </Button>

                <div className="pl-4 text-left ">
                  <img src={d.registered} className="" />
                  <p className="text-xs ">{d.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Ur_Course;
