import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

function Home() {
  const joinMeetingRef = useRef(null);
  const navigate = useNavigate();
  const [meetValue, setMeetValue] = useState("");

  const isUrl = (input) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+(\?[^ "]+)?$/;
    return urlRegex.test(input);
  };

  const joinClickHandler = (e) => {
    e.preventDefault();
    let id;
    if (meetValue.trim() === "") return;
    if (isUrl(meetValue)) {
      const parts = meetValue.split("/");
      const lastPart = parts[parts.length - 1];
      id = lastPart.trim();
    } else {
      id = meetValue;
    }
    navigate("/meet/"+id);
  };

  const newMeetingHandler = (e) => {
    e.preventDefault();
    let id = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      id += characters.charAt(randomIndex);
    }
    navigate("/meet/" + id);
  };

  return (
    <div className="text-center">
      <Navbar
        joinMeetingRef={joinMeetingRef}
        newMeetingHandler={newMeetingHandler}
      />
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
          <div className="flex flex-col md:flex-row gap-3 mt-8 items-center justify-center">
            <button
              onClick={newMeetingHandler}
              className="button text-base font-medium flex items-center justify-center gap-1  text-white bg-gradient-to-r hover:scale-105 transition-all ease-in-out  from-secondary via-shade to-secondary  px-3 py-2 rounded-md"
            >
              <VideoCallIcon />
              <span>New meeting</span>
            </button>
            <button className="button text-base flex items-center justify-center  gap-1 bg-white   font-medium border-[2px] text-secondary border-secondary px-3 py-2 rounded-md">
              <KeyboardRoundedIcon />
              <input
                ref={joinMeetingRef}
                value={meetValue}
                onChange={(e) => {
                  setMeetValue(e.target.value);
                }}
                className="border-none px-1 outline-none"
                placeholder="Enter a code or link"
                type="text"
              />
            </button>
            <div
              onClick={joinClickHandler}
              className="text-brand text-base cursor-pointer font-medium"
            >
              Join
            </div>
          </div>
        </div>
        <div className="right lg:w-1/2 flex justify-center items-center ">
          <img className="w-[90%] py-10" src="meet.jpg" alt="Meet" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
