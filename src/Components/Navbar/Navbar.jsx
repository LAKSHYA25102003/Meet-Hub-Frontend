import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({joinMeetingRef,newMeetingHandler}) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center w-full p-3 ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="flex items-center justify-between gap-3 cursor-pointer "
      >
        <img className="w-8" src="main.png" alt="MainIcon" />
        <h3 className="text-2xl font-medium text-brand">Meet Hub</h3>
      </div>
      <div className="gap-5 md:text-lg items-center flex font-medium text-brand">
        <div className="cursor-pointer">At a glance</div>
        <div className="cursor-pointer">How it works</div>
        <div className="cursor-pointer">Plan and Price</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-brand md:text-lg cursor-pointer">Sign In</div>
        <div>
          <button onClick={()=>{joinMeetingRef.current.focus()}} className="button text-base hover:bg-secondary hover:text-white font-medium border-[2px] text-secondary border-secondary px-3 py-[6px] rounded-md">
            Join the meeting
          </button>
        </div>
        <div>
          <button onClick={newMeetingHandler} className="button text-base font-medium  text-white bg-gradient-to-r hover:scale-105 transition-all ease-in-out  from-secondary via-shade to-secondary  px-3 py-2 rounded-md">
            Start meeting
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
