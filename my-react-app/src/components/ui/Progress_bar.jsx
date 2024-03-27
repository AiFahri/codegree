"use client";

import { Flowbite } from "flowbite-react";
import { Progress } from "flowbite-react";

const customTheme = {
  progress: {
    color: {
      blue: "bg-blue-cd",
    },
  },
};

const ProgressBar = () => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium text-blue-cd"></div>
        <Progress progress={10} color="blue" />
      </div>
    </Flowbite>
  );
};
export default ProgressBar;
