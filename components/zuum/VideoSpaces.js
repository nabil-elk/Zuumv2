import { React, useEffect, useRef } from "react";
import {
  useHMSActions,
  useHMSStore,
  selectLocalPeer,
  selectCameraStreamByPeerID,
} from "@100mslive/react-sdk";
function VideoSpaces({ peer, islocal }) {
  const hmsActions = useHMSActions();
  const videoRef = useRef(null);
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));

  useEffect(() => {
    (async () => {
      if (videoRef.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef.current);
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef.current);
        }
      }
    })();
  }, [videoTrack]);

  return (
    <div className=" flex m-1">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={false}
          className={`object-cover h-64 w-64 rounded-lg mt-12 shadow-lg " ${
            islocal ? "mirror" : "bg-gray-400"
          }`}
        ></video>
       <div className="top-0 w-full absolute flex justify-center">
          <div className="px-2 py-1 text-sm bg-gray-900 text-white mt-2 ml-2 rounded-lg">{`${peer.name}`}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoSpaces;