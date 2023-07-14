import React, { useEffect, useState } from "react";
import MeetingDetailCard from "./MeetingDetailCard";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import PresentToAllOutlinedIcon from "@mui/icons-material/PresentToAllOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useParams } from "react-router-dom";
import RoomPrompt from "./RoomPrompt";

function Room() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const [userID, setUserID] = useState("");
  const [meetingID, setMeetingID] = useState(params.id);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setPromptOpen(true);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="room-top h-[90vh]"></div>
        <div className="room-bottom h-[10vh] grid grid-cols-3 p-4 px-6">
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
                1
              </div>
              <PeopleAltOutlinedIcon />
            </div>
            <MessageOutlinedIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
      <RoomPrompt promptOpen={promptOpen} setPromptOpen={setPromptOpen} userID={userID} setUserID={setUserID} />
    </div>
  );
}

export default Room;