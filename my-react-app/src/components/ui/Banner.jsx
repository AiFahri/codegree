import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Banner = ({ heading, subheading, btn, trial }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-lp w-full md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* Banner image  */}
        <div className="-w-1/2">
          <img src="../src/assets/amico.svg" className="w-[250px] h-[250px]" />
          <p className="mt-2">
            Ragu? Coba{" "}
            <a text-white href="/subscription">
              Free Trial
            </a>{" "}
            selama 14 hari!
          </p>
        </div>
        {/* Banner content  */}
        <div className="md:w-1/2">
          <h1 className="text-4xl  mb-8  font-bold text-left text-white tracking-wide space  ">
            {heading}
          </h1>
          <h3 className="text-xl mb-8   text-left text-white tracking-wider">
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
  );
};
export default Banner;
