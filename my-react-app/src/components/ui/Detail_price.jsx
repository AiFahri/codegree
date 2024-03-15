"use client";

import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Pricing() {
  const navigate = useNavigate();
  return (
    <Card className="max-w-xl bg-white p-2 flex">
      <h5 className="w-1/2 bg rounded-[10px] px-4 py-4  shadow 3-xl p-8 mb-4 text-xl  font-extrabold text-whitedark:text-gray-400">
        Rincian pembayaran
      </h5>

      <div className="flex items-baseline text-black dark:text-black">
        <span className="text-3xl font-semibold">Rp</span>
        <span className="text-5xl font-extrabold tracking-tight">0</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3 ">
          <svg
            className="h-5 w-5 shrink-0 text-black dark:text-black"
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
          <span className="text-base font-normal leading-tight text-black">
            On-boarding Questions{" "}
          </span>
        </li>
        <li className="flex space-x-3 ">
          <svg
            className="h-5 w-5 shrink-0 text-black dark:text-black"
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
          <span className="text-base font-normal leading-tight text-black">
            Gamifikasi{" "}
          </span>
        </li>
      </ul>
    </Card>
  );
}
export default Pricing;
