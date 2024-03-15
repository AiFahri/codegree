import Pricing from "../ui/Pricing";
import Pricing2 from "../ui/Pricing2";
import Payment from "../ui/Payment";
import Navbar from "../shared/Navbar";
import Footers from "../shared/Footers";

const Subscribtion = () => {
  return (
    <>
      <Navbar />
      <div className="mt-32">
        <div className="px-32">
          <h2 className="text-black text-center text-6xl font-bold">
            Tunggu apa lagi?
          </h2>
          <h3 className="text-black text-center text-2xl font-semibold  mt-6 mb-8">
            Mulai berlangganan Monthly Subscription Codegree dengan free trial
            selama 14 hari!
          </h3>
        </div>
      </div>
      <div className="flex justify-around">
        <Pricing />
        <Pricing2 />
      </div>
    </>
  );
};
export default Subscribtion;
