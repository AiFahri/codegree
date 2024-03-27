// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
import DropDownnn from "../ui/Drop_down";

const Frequently = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        {" "}
        <div className="accordion mt-6 mb-6">
          <h3 className="text-black text-3xl font-bold  mb-2 text-center">
            Punya Pertanyaan Seputar{" "}
            <span className="text-blue-cd">Codegree</span> <span>?</span>
          </h3>
          <h4 className="text-grey-txt text-lg">
            Berikut adalah daftar pertanyaan yang sering ditanyakan{" "}
          </h4>
          <div className="px-60 mt-5 mb-36">
            <DropDownnn />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Frequently;
