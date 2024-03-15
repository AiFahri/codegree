import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/Ai/BCC Internship - Codegree/my-react-app/src/variants";

const Banner = ({ heading, subheading, btn, trial }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="text-center my-8"
    >
      <div className="bg-blue-lp w-full h-[500px] md:p-9  px-4  py-4">
        <div className="flex flex-col md:flex-row-reverse my-20 justify-between items-center gap-10">
          {/* Banner image  */}
          <div className="-w-1/2">
            <img
              src="../src/assets/amico.svg"
              className="w-[250px] h-[250px]"
            />
            <p className="mt-6 text-white">
              Ragu? Coba{" "}
              <a href="/subscription" className="text-white ">
                Free Trial
              </a>{" "}
              selama 14 hari!
            </p>
          </div>
          {/* Banner content  */}
          <div className="md:w-1/2">
            <h1 className="text-5xl  mb-8  font-bold text-left text-white tracking-wide space  ">
              {heading}
            </h1>
            <h3 className="text-2xl mb-8   text-left text-white tracking-wider">
              {subheading}
            </h3>
            <Button
              type={"button"}
              className="w-4/5 text-blue-lp bg-white hover:bg-blue-lp hover:text-white border hover:border-white "
              variation={"secondary"}
              onClick={() => navigate("/signup")}
            >
              {btn}
            </Button>
            {/* <div className="w-[100%] h-[776px] [background:blue-linear-gradient(240deg,rgba(37,69,244,0.5))] "></div> */}
          </div>

          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};
export default Banner;
