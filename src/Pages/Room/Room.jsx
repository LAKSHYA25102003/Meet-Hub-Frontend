import React, { useContext, useEffect, useRef, useState } from "react";
import { faker } from '@faker-js/faker';
import MeetingDetailCard from "./MeetingDetailCard";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useParams } from "react-router-dom";
import RoomPrompt from "./RoomPrompt";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { setRoomUsers } from "../../Redux/Room/RoomAction";
import { setCurrentUser } from "../../Redux/User/UserAction";
import { updateRoom } from "../../Redux/Room/RoomAction";
import SimplePeer from "simple-peer";
import RoomContext from "../../Context/Room/RoomContext";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

function Room() {
  const {id}=useParams();
  const {ws,me,stream}=useContext(RoomContext);
  useEffect(()=>{
    if(me)
    {
      ws.emit("join-room",{roomId:id,peerId:me._id})
    }
  },[id,me,ws])
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="room-top h-[90vh] p-4">
          <div className="flex-1 grid h-[90vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <VideoPlayer stream={stream}/>
          </div>
        </div>
        {/* <div className="room-bottom h-[10vh] grid grid-cols-3 p-4 px-6">
          <div className="flex justify-start">
           <MeetingDetailCard
           openModal={openModal}
           closeModal={closeModal}
            isOpen={isOpen}
           />
          </div> 
          <div className="flex gap-3 text-xl justify-center items-center">
            <div className="h-10 cursor-pointer w-10 flex justify-center items-center bg-gray-700 text-white rounded-full">
              <MicIcon />
            </div>
            <div className="h-10 cursor-pointer w-10 flex justify-center items-center bg-red-500 text-white rounded-full">
              <VideocamOffOutlinedIcon />
            </div>
            <div className="h-10 cursor-pointer w-10 flex justify-center items-center bg-gray-700 text-white rounded-full">
              <PresentToAllOutlinedIcon />
            </div>
            <div className="h-10 cursor-pointer w-10 flex justify-center items-center bg-red-500 text-white rounded-full">
              <CallEndOutlinedIcon />
            </div>
          </div>
          <div className="flex justify-end gap-8 items-center text-white">
            <div className="cursor-pointer relative">
              <div className="absolute top-[-20px] right-[-12px] bg-gray-700 w-6 h-6 rounded-full text-center">
                9
              </div>
              <PeopleAltOutlinedIcon />
            </div>
            <MessageOutlinedIcon className="cursor-pointer" />
          </div>
        </div> */}
      </div>
      {/* <RoomPrompt
        promptOpen={promptOpen}
        setPromptOpen={setPromptOpen}
        userID={user}
        setUserID={setUser}
      /> */}
    </div>
  );
}

export default Room;
