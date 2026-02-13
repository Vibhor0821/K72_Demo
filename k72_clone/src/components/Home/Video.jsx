import React from "react";

function Video() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1768484699~exp=1768488299~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=5719e989e7f1331306595e040472e3edfb3ea90519c5fad974296722de9bd48c&r=dXMtZWFzdDE%3D"
      ></video>
    </div>
  );
}

export default Video;
