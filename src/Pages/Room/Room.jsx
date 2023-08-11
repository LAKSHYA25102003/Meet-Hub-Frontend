import React, { useContext, useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
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
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);
  console.log(peers, "hi");
  useEffect(() => {
    if (me) {
      ws.emit("join-room", { roomId: id, peerId: me._id });
    }
  }, [id, me, ws]);
  return (
    <div>
      <div className="grid-cols-1 sm:grid-cols-3 gap-3">
        <VideoPlayer stream={stream} />
        {Object.values(peers).map((peer) => {
          return <VideoPlayer stream={peer.stream} />;
        })}
      </div>
    </div>
  );
}

export default Room;
