"use client";

import { Card } from "flowbite-react";

function Payment() {
  return (
    <Card className="flex justify-center max-w-sm  mx-auto">
      <h5 className="mb-3 text-base font-semibold text-left text-gray-900 dark:text-white lg:text-xl">
        Pilih metode pembayaran
      </h5>
      <p className="text-sm font-normal text-left text-gray-500 dark:text-gray-400">
        Pilih metode pembayaran yang anda inginkan. Pastikan saldo mencukupi
      </p>
      <ul className="my-4 space-y-3">
        <li>
          <a
            href="#"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            <img src="./src/assets/gopay.svg" className="h-8" />
            <span className="ml-3 text-left px-2 flex-1 whitespace-nowrap">
              Gopay
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            <img src="./src/assets/ovo.svg" className="h-8" />
            <span className="ml-3 text-left px-2 flex-1 whitespace-nowrap">
              OVO
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            <img src="./src/assets/linkaja.svg" className="h-8" />
            <span className="ml-3 text-left px-2 flex-1 whitespace-nowrap">
              LinkAja
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            <img src="./src/assets/bca.svg" className="h-8" />
            <span className="ml-3 text-left px-2 flex-1 whitespace-nowrap">
              BCA
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            <img src="./src/assets/mandiri.svg" className="h-8" />
            <span className="ml-3 text-left px-2 flex-1 whitespace-nowrap">
              Mandiri
            </span>
          </a>
        </li>
      </ul>
    </Card>
  );
}

export default Payment;
