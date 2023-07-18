import { Box, Modal } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';

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

function RoomPrompt({ promptOpen, setPromptOpen, userID, setUserID, connectSocket }) {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userID.trim() === "") return;
    setPromptOpen(false);
    connectSocket();
  };

  return (
    <div>
      <Modal
        open={promptOpen}
        onClose={() => {
          navigate("/");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
                  setUserID(e.target.value);
                }}
                value={userID}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="flex gap-3 justify-end items-center">
              <button
                onClick={submitHandler}
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
      </Modal>
    </div>
  );
}

export default RoomPrompt;
