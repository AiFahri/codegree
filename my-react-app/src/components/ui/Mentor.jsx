import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "/Ai/BCC Internship - Codegree/my-react-app/src/variants";

const Mentor = () => {
  const services = [
    {
      id: 1,
      title: "Rina Sugiyem",
      decription: "Juara 1 Web Development Fasilkom UI Competition",
      "Juara 1 Data Science Kaggle Competition":
        "Juara 3 International UI/UX Competition Harvard University",
      image: "/src/assets/unsplash_mentor.png",
    },
    {
      id: 2,
      title: "National Associations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/group-club.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h3 className="text-black text-3xl font-bold  mb-2 text-center">
          Mentor <h3 className="text-blue-lp">Codegree</h3>
        </h3>
        <p className="text-ml text-grey-txt">
          Codegree hadir dengan berbagai mentor berkualitas dengan berbagai
          pencapaian dan berasal dari universitas ternama.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <div className="bg-[#E8F5E9] w-50 h-100 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
            <img src="src/assets/unsplash_mentor.png" alt="" />
            <img src="src/assets/unsplash_mentor.png" alt="" />
            <img src="src/assets/unsplash_mentor.png" alt="" />
            <img src="src/assets/icons/company4.png" alt="" />
            <img src="src/assets/icons/company5.png" alt="" />
            <img src="src/assets/icons/company6.png" alt="" />
            <img src="src/assets/icons/company7.png" alt="" />
          </div>
        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h3 className="text-black text-3xl font-bold  mb-2 text-center">
          Mentor <h3 className="text-blue-lp">Codegree</h3>
        </h3>
        <p className="text-ml text-grey-txt">
          Codegree hadir dengan berbagai mentor berkualitas dengan berbagai
          pencapaian dan berasal dari universitas ternama.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="text-black text-center md:w-[300px] mx-auto  rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-30 h-150 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl items-center">
                <img
                  src="src/assets/unsplash_mentor.png"
                  alt=""
                  className="mt-0 mx-0 my-0 p-0"
                />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Mentor;
