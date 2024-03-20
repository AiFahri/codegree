"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footers = () => {
  return (
    <div className="bg-blue-cd w-full text-white ">
      <div className="grid w-full p-6 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="">
          <Footer.Brand
            href="/landingpage"
            src="../src/assets/Group 24.svg"
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
              <a className="text-white text-sm block mb-3" href="#">
                Home
              </a>
              <a className="text-white text-sm block mb-3" href="#">
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

      <div className=" bg-blue-lp w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Codegree™" year={2024} />
      </div>
    </div>
  );
};
export default Footers;
