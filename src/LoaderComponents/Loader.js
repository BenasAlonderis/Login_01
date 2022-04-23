import React from "react";
import loadSVG from "../assets/svg/load.svg";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 bg-[#1f41a9] w-screen h-screen flex items-center justify-center">
      <img src={loadSVG} alt="loading-gif" />
    </div>
  );
};
export default Loader;
