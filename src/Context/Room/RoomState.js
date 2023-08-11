import React, { useEffect, useState } from "react";
import RoomContext from "./RoomContext"
import socketIO from "socket.io-client";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import {v4 as uuidv4} from "uuid";


const WS = "http://localhost:5000";
const ws = socketIO(WS);

export default function RoomState (props) {
    const [me,setMe]= useState();
    const [userId,setUserId]=useState("");
    const navigate=useNavigate();
    const [stream,setStream] = useState();
    const enterRoom = ({roomId})=>{
        navigate(`/room/${roomId}`);
    }

    const getUsers=({participants,roomId})=>{
        console.log({participants,roomId});
    }

    useEffect(() => {
        const meId=uuidv4();
        const peer=new Peer(meId);
        setMe(peer);

        try{
            navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{
                setStream(stream);
            })
        }catch(error)
        {
            console.log(error);
        }

        ws.on("room-created",enterRoom);
        ws.on("get-users",getUsers);
    },[])

    useEffect(()=>{
        if(!me) return ;
        if(!stream) return ;
        ws.on("user-joined",({peerId})=>{
            const call=me.call(peerId,stream);
        })
        me.on("call",(call)=>{
            call.answer(stream)
        })
    },[me,stream])

    return (
        <RoomContext.Provider value={{ ws,me,userId,setUserId,stream }}>
            {props.children}
        </RoomContext.Provider>
    )
};