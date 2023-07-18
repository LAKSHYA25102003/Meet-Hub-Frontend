import { setUser } from "./UserSlice"

export const setCurrentUser=(user)=> async(dispatch)=>{
    dispatch(setUser(user))
}