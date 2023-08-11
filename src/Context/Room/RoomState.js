import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import RoomContext from "./RoomContext"
import socketIO from "socket.io-client";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import {v4 as uuidv4} from "uuid";
import  PeersReducer  from "../../Reducers/PeersReducer";
import {
    addPeerStreamAction,
    addPeerNameAction,
    removePeerStreamAction,
    addAllPeersAction,
} from "../../Reducers/PeerAction";


const WS = "http://localhost:5000";
const ws = socketIO(WS);

export default function RoomState (props) {
    const [me,setMe]= useState();
    const [userId,setUserId]=useState("");
    const [peers, dispatch] = useReducer(PeersReducer, {});
    const navigate=useNavigate();
    const [stream,setStream] = useState();
    const enterRoom = ({roomId})=>{
        navigate(`/room/${roomId}`);
    }

    const getUsers=({participants,roomId})=>{
        console.log({participants,roomId});
    }

    const removePeer = (peerId) => {
        dispatch(removePeerStreamAction(peerId));
    };

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
        ws.on("user-disconnected",removePeer);
    },[])

    useEffect(()=>{
        if(!me) return ;
        if(!stream) return ;
        ws.on("user-joined",({peerId})=>{  
            const call=me.call(peerId,stream);
            call.on("stream", (peerStream) => {
                console.log("user-joined",peerId,peerStream);
                dispatch(addPeerStreamAction(peerId, peerStream));
            });
        })
        me.on("call",(call)=>{
            call.answer(stream)
            call.on("stream", (peerStream) => {
                dispatch(addPeerStreamAction(call.peer, peerStream));
            });
        })
    },[me,stream]);

    return (
        <RoomContext.Provider value={{ ws,me,userId,setUserId,stream,peers }}>
            {props.children}
        </RoomContext.Provider>
    )
};