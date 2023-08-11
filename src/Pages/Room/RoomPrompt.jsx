import { Box, Modal } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RoomContext from "../../Context/Room/RoomContext"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RoomPrompt() {
  const {userId,setUserId} = useContext(RoomContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userId.trim() === "") return;
  };

  return (
    <div>
      <Box sx={style}>
        <div className="flex flex-col gap-3">
          <div>
            <label
              for="userID"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter User ID
            </label>
            <input
              type="text"
              id="userID"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              value={userId}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="flex gap-3 justify-end items-center">
            <button
              // onClick={submitHandler}
              className="button text-base font-medium  text-white bg-gradient-to-r hover:scale-105 transition-all ease-in-out  from-secondary via-shade to-secondary  px-2 py-1 rounded-md"
            >
              Submit
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="button text-base hover:bg-secondary hover:text-white font-medium border-[2px] text-secondary border-secondary px-2 py-[2px] rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default RoomPrompt;
