import React from "react";

const MainPageBackground = () => {
  return (
    <>
      <div className="w-full h-screen bg-white pt-20">
        {/*Div to contain boxes*/}
        <div className="">
          {/*Top Row */}
          <div className="flex justify-evenly m-16">
            <div className="w-48 h-48 rounded-full bg-red-500 hover:scale-150"></div>
            <div className="w-48 h-48 rounded-full bg-green-500"></div>
            <div className="w-48 h-48 rounded-full bg-blue-500"></div>
            <div className="w-48 h-48 rounded-full bg-green-500"></div>
          </div>
          {/*Middle Row */}
          <div className="flex justify-between m-16">
            <div className="w-48 h-48 rounded-full bg-blue-500"></div>
            <div className="w-48 h-48 rounded-full bg-red-500"></div>
            <div className="w-48 h-48 rounded-full bg-green-500"></div>
            <div className="w-48 h-48 rounded-full bg-red-500"></div>
          </div>
          {/*Bottom Row */}
          <div className="flex justify-evenly m-16">
            <div className="w-48 h-48 rounded-full bg-red-500"></div>
            <div className="w-48 h-48 rounded-full bg-green-500"></div>
            <div className="w-48 h-48 rounded-full bg-blue-500"></div>
            <div className="w-48 h-48 rounded-full bg-red-500"></div>
          </div>
        </div>{" "}
      </div>
      <div className="w-full h-screen bg-red-500"></div>
    </>
  );
};

export default MainPageBackground;
