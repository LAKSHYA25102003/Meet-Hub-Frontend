import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userID:"",
    meetingID:"",
    socketID:"",
    error:"",
    loading:false
}

const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,{payload})=>{
            state.userID=payload.userID;
            state.meetingID=payload.meetingID;
            state.socketID=payload.socketID;
        }
    }

})

const {reducer,actions}=UserSlice;

export const {setUser}=actions;

export default reducer;