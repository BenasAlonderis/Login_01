import React from "react";
import bubbleTopLeftSVG from "../assets/svg/bubbleTopLeft.svg";
import bubbleBottomLeftSVG from "../assets/svg/bubbleBottomLeft.svg";
import shapeMiddleRightSVG from "../assets/svg/shapeBottomRight.svg";

const Background = () => {
  return (
    <>
      <img
        className="fixed top-0 left-0 -z-10 w-[10rem] h-[10rem] lg:w-[15.5rem] lg:h-[15.5rem] xl:w-[25rem] xl:h-[25rem]"
        src={bubbleTopLeftSVG}
        alt="bubble-left-top"
      />
      <img
        className="fixed bottom-0 left-0 -z-10 w-[5rem] h-[5rem] lg:w-[10.5rem] lg:h-[10.5rem] xl:w-[15rem] xl:h-[15rem]"
        src={bubbleBottomLeftSVG}
        alt="bubble-left-bottom"
      />
      <img
        className="fixed bottom-0 right-0 -z-10 w-[16rem] h-[15rem] lg:w-[21.5rem] lg:h-[20.5rem] xl:w-[36.75rem] xl:h-[35.5rem]"
        src={shapeMiddleRightSVG}
        alt="shape-middle-right"
      />
    </>
  );
};
export default Background;
