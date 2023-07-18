import { setRoom } from "./Roomslice"


export const setRoomUsers=(users)=> async(dispatch)=>{
    dispatch(setRoom(users));
}

export const updateRoom=(newUser)=>async(dispatch, getState)=>{
    let state = getState();
    let usersCopy=[...state.roomUsers.roomUsers];
    usersCopy.push(newUser);
    dispatch(setRoom(usersCopy));
}