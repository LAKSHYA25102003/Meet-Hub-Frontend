import React, { useEffect, useRef } from 'react';

function VideoPlayer({stream}) {
  const videoRef=useRef(null);
  useEffect(()=>{
    if(videoRef.current)
    {
        videoRef.current.srcObject=stream;
    }
  },[])
  return (
    <div>
      <video src={videoRef} playsInline muted></video>
    </div>
  )
}

export default VideoPlayer
