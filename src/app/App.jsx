import React from "react";

const App = () => {
  return (
    <div className="relative">
      <div className="w-[1440px] h-[900px] bg-[#000000] mx-auto mt-5">
        <div className="relative w-[526px] h-[612px] top-[192px] left-[488px] drop-shadow bg-[rgba(255,255,255,0.05)] flex flex-col justify-center">
          <div className="font-[600] text-[70px] text-white ml-10 opacity-50 mt-[-40px] mb-10">
            LOGIN
          </div>
          <form className="flex flex-col gap-4 mb-7">
            <input
              type="text"
              id
              placeholder="Username"
              className="p-3 w-[440px] h-[59px]  bg-[#000000] ml-10 rounded-md"
              name
            ></input>
            <input
              type="text"
              id
              placeholder="Password"
              className="p-3 w-[440px] h-[59px]  bg-[#000000] ml-10 rounded-md"
              name
            ></input>
          </form>
          <button className="login w-[222.8px] h-[54.3px] rounded-md bg-[rgba(255,255,255,0.1)] self-start ml-10 text-[25px] text-[rgba(255,255,255,0.5)]">
            LOGIN
          </button>
          <div className="flex mt-10 mx-auto">
            <div className="w-[200.23px] h-[0px] border border-solid border-white mt-4 mr-2 opacity-50"></div>
            <div className="font-[600] text-[25px] text-white opacity-50">
              OR
            </div>
            <div className="w-[200.23px] h-[0px] border border-solid border-white mt-4 ml-2 opacity-50"></div>
          </div>
          <div className="w-[141.51px] h-[26.3px] flex justify-between mt-5 mx-auto">
            <img
              src="./google.png"
              alt="google"
              style={{ width: "30.11px", height: "26px" }}
            />
            <img
              src="./fbook.png"
              alt="google"
              style={{ width: "30.11px", height: "26px" }}
            />
          </div>
        </div>
        <div>
          <img
            src="./top-right.png"
            alt="rectangle"
            style={{ position: "absolute", bottom: "280px", left: "1273px" }}
          />
        </div>
        <div>
          <img
            src="./bot-left.png"
            alt="rectangle"
            style={{ position: "absolute", bottom: "0px" }}
          />
        </div>
        <div class="triangle rotate-50 absolute left-[1400px] top-[650px]"></div>
        <div class="triangle rotate--50 absolute bottom-[740px] left-[360px]"></div>
      </div>
    </div>
  );
};

export default App;
