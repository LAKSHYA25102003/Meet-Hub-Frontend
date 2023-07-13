import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";

function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center">
        <div className="left flex flex-col justify-start items-center lg:items-start gap-3 lg:w-1/2 px-6">
          <div className="text-3xl lg:text-5xl text-center lg:text-start  w-[80%]">
            <div>Premium video meetings.</div>
            <div>Now free for everyone.</div>
          </div>
          <div className="text-gray-500 text-center text-lg lg:text-start w-[60%]">
            We're designing the service like google meet, for secure meetings.
            This is for learning purpose.
          </div>
          <div className="flex gap-3 items-center justify-center">
            <button className="button text-base font-medium flex items-center justify-center gap-1  text-white bg-gradient-to-r hover:scale-105 transition-all ease-in-out  from-secondary via-shade to-secondary  px-3 py-2 rounded-md">
              <VideoCallIcon />
              <span>New meeting</span>
            </button>
            <button className="button text-base flex items-center justify-center  gap-1 bg-white   font-medium border-[2px] text-secondary border-secondary px-3 py-2 rounded-md">
              <KeyboardRoundedIcon/>
              <input className="border-none px-1 outline-none" placeholder="Enter a code or link" type="text" />
            </button>
            <div className="text-brand text-base cursor-pointer font-medium">Join</div>
          </div>
        </div>
        <div className="right lg:w-1/2 flex justify-center items-center ">
          <img className="w-[90%] py-10" src="meet.jpg" alt="Meet" />
        </div>
      </div>
    </div>
  );
}

export default Home;
