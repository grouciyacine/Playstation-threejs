import React from "react";
import MantetteCanvas from "../cnvas/Mantette";

function Manette() {
  return (
    <div className="bg-play w-full h-[500px] object-cover bg-cover  text-white p-5 flex flex-col sm:flex-row pt-8 border-t-2 border-secondary">
      <div className="flex flex-row sm:w-1/2 ">
        <div className="flex flex-col  items-center p-3">
          <div className="bg-[#2B86C5] w-7 h-7 rounded-full " />
          <div className="w-2 sm:h-44 h-28 rounded-sm violet-gradient -translate-y-3 -translate-x-[1px]" />
        </div>
        <div className=" sm:text-xl mini:text-xs mini1:text-sm">
          <h1 className="text-3xl text-gray-300 mx-4 font-sans p-3">
            controller
          </h1>
          <h4 className=" font-sans">
            The PlayStation 5 controller, also known as the PS5 controller, is a
            game controller designed for the PlayStation 5 console, featuring
            advanced haptic feedback and adaptive triggers.
          </h4>
          <div className="flex flex-row justify-center items-center p-5  space-x-5">
            <button className="bg-[#2B86C5]  text-xl rounded-full p-2 hover:bg-[#1F1F1F] hover:text-white duration-75">
              Buy Now
            </button>
            <button className="bg-[#2B86C5]  text-xl rounded-full p-2 hover:bg-[#1F1F1F] hover:text-white duration-75 ">
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className=" sm:w-1/2">
        <MantetteCanvas />
      </div>
    </div>
  );
}

export default Manette;
