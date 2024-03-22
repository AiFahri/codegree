"use client";

import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import { getPayment } from "../../api/services/payment";

function Pricing2() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handlePayment = async () => {
    try {
      const response = await getPayment();
      // console.log(response.data);
      setData(response.data);
      setTimeout(() => {
        window.location.href = response.data;
      }, 500);
    } catch (error) {
      console.log(error);
      if (error.response.data.error === "data not found") {
        setData([]);
      }
    }
  };

  // useEffect(() => {
  //   handlePayment();
  // }, []);

  return (
    <Card className="max-w-xl bg-blue-lp p-2">
      <h5 className="border bg-white w-1/2 bg rounded-[10px] px-4 py-4  shadow 3-xl p-8 mb-4 text-xl  font-extrabold text-blue-lp dark:text-gray-400">
        Premium
      </h5>
      <p className="text-left">
        Dapatkan akses menyeluruh, termasuk 1-on-1 mentoring dan unduh
        sertifikat!
      </p>
      <div className="flex items-baseline text-white dark:text-white">
        <span className="text-3xl font-semibold">Rp</span>
        <span className="text-5xl font-extrabold tracking-tight">149.000</span>
        <span className="ml-1 text-xl font-normal  text-white dark:text-gray-400">
          /month
        </span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3 ">
          <span className="text-base font-normal leading-tight text-white">
            On-boarding Questions{" "}
          </span>
        </li>
        <li className="flex space-x-3 ">
          <svg
            className="h-5 w-5 shrink-0 text-white dark:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-white">
            Gamifikasi{" "}
          </span>
        </li>
        <li className="flex space-x-3 ">
          <svg
            className="h-5 w-5 shrink-0 text-white dark:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-white">
            Akses semua course{" "}
          </span>
        </li>
        <li className="flex space-x-3 ">
          <svg
            className="h-5 w-5 shrink-0 text-white dark:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-white">
            1-on-1 Mentoring{" "}
          </span>
        </li>
        <li className="flex space-x-3 ">
          <svg
            className="h-5 w-5 shrink-0 text-white dark:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-white">
            Unduh sertifikat
          </span>
        </li>
      </ul>
      <Button
        type={"button"}
        // className="inline-flex w-full justify-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
        variation={"login"}
        onClick={() => handlePayment()}
      >
        Coba gratis selama 14 Hari!
      </Button>
    </Card>
  );
}
export default Pricing2;
