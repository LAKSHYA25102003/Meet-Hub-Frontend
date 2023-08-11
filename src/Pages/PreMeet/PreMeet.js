import React from 'react'
import RoomPrompt from "../Room/RoomPrompt.jsx";
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer.js';

function PreMeet() {
    return (
        <div className='flex flex-col justify-center items-center gap-6'>
            <RoomPrompt />
            <VideoPlayer />
        </div>
    )
}

export default PreMeet
