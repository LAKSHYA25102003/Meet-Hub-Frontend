import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomUsers: [],
  isLoading: false,
  error: "",
};

const RoomSlice=createSlice({
    name:"roomUsers",
    initialState,
    reducers:{
      setRoom:(state,{payload})=>{
        state.roomUsers=payload
      }
    }
})


const {reducer,actions}=RoomSlice;

export const {setRoom}=actions;

export default reducer;