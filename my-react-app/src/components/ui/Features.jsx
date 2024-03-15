const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4  ">
      {/* <div className="flex flex-col lg:flex-row justify-between items-start gap-10"> */}
      {/* <div className="lg:w-1/4 item"> */}
      <h3 className="text-black text-3xl font-bold lg:w-1/2 mb-3 text-center">
        Fitur Unggulan <span className="text-blue-cd">Codegree</span>
      </h3>
      {/* x</div> */}
      {/* featured cards  */}
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col justify-between md:gap-1">
          <div className="border bg-white bg rounded-[35px] px-4 py-4  shadow 3-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <img src="../src/assets/mentoring.svg" />
          </div>
          <h5 className="text-2xl font-semibold text-black px-5 text-center mt-5">
            Mentoring
          </h5>
          <p className="text-ml text-grey-txt">
            Mentor berkualitas siap menjawab apapun kesulitanmu!
          </p>
          <div className="border bg-white bg rounded-[35px] px-4 py-4 items-center shadow 3-xl p-8 flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <img src="../src/assets/book.svg" />
          </div>
          <h5 className="text-2xl font-semibold text-black px-5 text-center mt-5">
            Terstruktur
          </h5>
          <p className="text-ml text-grey-txt">
            Course yang ada didesign mulai dari dasar hingga yang kompleks
          </p>
          <div className="border bg-white bg rounded-[35px] px-4 py-4  shadow 3-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <img src="../src/assets/ps.svg" />
          </div>
          <h5 className="text-2xl font-semibold text-black px-5 text-center mt-5">
            Gamifikasi
          </h5>
          <p className="text-ml text-grey-txt">
            Pembelajaran dilakukan secara menyenanagkan melalui kuis
          </p>
        </div>
      </div>
    </div>
    // x</div>
  );
};
export default Features;
