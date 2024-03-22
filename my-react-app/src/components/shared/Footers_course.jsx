import Image from "../../../src/assets/Group 37.svg";

const Footers_course = () => {
  return (
    <div className="flex justify-center items-center mt-4 h-20 bg-blue-cd w-[100%] text-white">
      <h3 className="">Konsep Pemrograman Dasar</h3>
      <a href="/quiz" className="pb-4">
        <h3 className="flex absolute right-4 pr-2 text-white">
          Quiz <img className="ml-2" src={Image} />
        </h3>
      </a>
    </div>
  );
};
export default Footers_course;
