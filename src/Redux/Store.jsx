import { configureStore } from "@reduxjs/toolkit";
import roomUsersReducer from "./Room/Roomslice"
import userReducer from "./User/UserSlice"

const Store=configureStore({
    reducer:{
        roomUsers:roomUsersReducer,
        currentUser:userReducer
    }
})

export default Store;