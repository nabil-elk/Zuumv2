import React from "react";
import { useRouter } from 'next/router';
import {
  useHMSActions,
  useHMSStore,
  selectPeers,
  selectLocalPeer,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectPermissions,
  selectIsLocalScreenShared,
} from "@100mslive/react-sdk";

function Controls({ switches }) {
  const hmsActions = useHMSActions();
  const localPeer = useHMSStore(selectLocalPeer);
  const host = localPeer.roleName === "host";
  const peers = useHMSStore(selectPeers);
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);
  const router = useRouter();

  const SwitchAudio = async () => {
    //toggle audio enabled
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
  };


  const SwitchVideo = async () => {
    //toggle video enabled
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
  };

  const ExitRoom = () => {
    hmsActions.leave();
    //exit a room
    router.push("/list");
  };

  const permissions = useHMSStore(selectPermissions);

  const endRoom = async () => {
    //end the meeting
    try {
      const lock = false; // A value of true disallow rejoins
      const reason = "Meeting is over";
      await hmsActions.endRoom(lock, reason);
    } catch (error) {
      // Permission denied or not connected to room
      console.error(error);
    }
    router.push("/list");
  };

  return (
    <div className=" w-full h-full flex flex-row gap-2 justify-center items-center text-white font-semibold">
      <button
        className=" uppercase px-5 py-2 hover:bg-blue-600"
        onClick={SwitchVideo}
      >
        {isLocalVideoEnabled ? "On Video" : "Off Video"}
      </button>
      <button
        className=" uppercase px-5 py-2 hover:bg-blue-600"
        onClick={SwitchAudio}
      >
        {isLocalAudioEnabled ? "On Audio" : "Off Audio"}
      </button>
      {host ? (
        <>
          {permissions.endRoom ? (
            <button
              className=" uppercase px-5 py-2 hover:bg-blue-600"
              onClick={endRoom}
            >
              Exit Meeting
            </button>
          ) : null}
        </>
      ) : (
        <>
          <button
            className=" uppercase px-5 py-2 hover:bg-blue-600"
            onClick={ExitRoom}
          >
            Exit Meeting
          </button>
        </>
      )}
    </div>
  );
}
export default Controls;