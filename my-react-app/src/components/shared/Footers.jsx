"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import Image from "../../../src/assets/Group 24.svg";
const Footers = () => {
  const style = { color: "white", fontSize: "1.5em" };

  return (
    <div className="bg-blue-cd w-[100%] text-white ">
      <div className="grid w-full p-6 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="">
          <Footer.Brand
            href="/landingpage"
            src={Image}
            className="h-20"
            alt="Flowbite Logo"
          />
          <h5 className="text-left font-bold mt-4">
            PT. Internship BCC Kelompok 9
          </h5>
          <h5 className="text-left mt-3">
            Fakultas Ilmu Komputer Universitas Brawijaya
          </h5>
          <h5 className="text-left mt-3">
            Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang
          </h5>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* icons  */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          <div className="text-left text-white">
            <h5 className="font-bold mb-3">Resource</h5>
            <ul>
              <a className="text-white text-sm block mb-3" href="/dashboard">
                Home
              </a>
              <a className="text-white text-sm block mb-3" href="/course">
                Course
              </a>
              <a className="text-white text-sm block mb-3" href="#">
                Blogs
              </a>
              <a className="text-white text-sm block mb-3" href="#">
                Syarat Ketentuan
              </a>
            </ul>
          </div>
          <div className="text-left text-white">
            <h5 className="font-bold mb-3">Contact</h5>
            <ul>
              <a className="text-white text-sm block mb-3" href="#">
                +0341 410 948
              </a>
              <a className="text-white text-sm block mb-3" href="#">
                kel.9@gmail.com
              </a>

              <a className="text-white text-sm block mb-3" href="#">
                Jl.Veteran, Malang
              </a>
            </ul>
          </div>
          <div className="text-left text-white">
            <h5 className="font-bold text-sm mb-3">About Us</h5>
            <ul>
              <a className="text-white block mb-3" href="#">
                FAQ
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-blue-cd w-full sm:flex sm:items-center sm:justify-between">
        <div className="mt-4 flex space-x-6 mb-10 sm:mt-0 mx-6">
          <Footer.Icon href="#" icon={BsInstagram} style={style} />
          <Footer.Icon href="#" icon={BsFacebook} style={style} />
          <Footer.Icon href="#" icon={BsTwitterX} style={style} />
          <Footer.Icon href="#" icon={BsYoutube} style={style} />
        </div>
      </div>
    </div>
  );
};
export default Footers;
