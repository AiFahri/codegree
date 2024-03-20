// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants/variants";
const Title = ({ text1, text2, variation, className }) => {
  const getTitleVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "text-black text-3xl font-bold  mb-2 text-center pt-12";
      case "secondary":
        return "text-black text-3xl font-bold  mb-2 text-left px-24 pt-12";
      case "third":
        return "text-black text-xl font-bold  mb-2 text-left px-24 pt-12";
      default:
        return "";
    }
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="text-center my-8"
    >
      <h3
        className={`${getTitleVariation(
          variation
        )} text-black text-3xl font-bold  mb-2  pt-12 ${className}`}
      >
        {text1} <span className="text-blue-cd">{text2}</span>
      </h3>
    </motion.div>
  );
};
export default Title;
