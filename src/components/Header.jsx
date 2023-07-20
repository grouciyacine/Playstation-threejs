import React from "react";

function Header() {
  return (
    <section className=" h-[600px] relative object-contain  bg-center bg-cover bg-hero-pattern flex flex-col justify-start items-start ">
      <video
        muted
        loop
        className="w-full h-[600px] object-cover brightness-[60%]"
        autoPlay
        src="/video/ps5.mp4"
      ></video>
      <div className="absolute pt-14 flex flex-col sm:flex-row">
        <div className="flex flex-row">
                  <div className="flex flex-col justify-start items-center pt-20 p-3 translate-x-7  ">
          <div className="w-7 h-7 bg-blue-600 rounded-full" />
          <div className="w-2  h-40 blue-gradient -translate-y-1 rounded-md" />
        </div>
        <div className="flex flex-col justify-center items-center   pt-20 w-full sm:w-[50%]">
          <h1 className="text-gray-300 text-3xl flex justify-start  items-start p-3 px-5 font-sans">
            PlayStation
          </h1>
          <h5 className="text-white text-lg p-4 mx-10 font-sans">
            {" "}
            Popular gaming consoles by Sony. Offers advanced features and
            exclusive games. Immersive gaming experiences.
          </h5>
        </div>
        </div>

        <div className="justify-center items-end sm:justify-center w-full  pt-10  sm:pt-0 flex space-x-3 flex-row">
          <button className="bg-[#0070D1] text-xl rounded-full p-2 hover:bg-[#1F1F1F] hover:text-white duration-75">
            View More
          </button>
          <button className="bg-[#0070D1] text-xl rounded-full p-2 hover:bg-[#1F1F1F] hover:text-white duration-75">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
