import { useState } from "react";

const ServerPic = ({ message, isServer, color }) => {
  const [picData, setPicData] = useState(message || "");
  const [server, setServer] = useState(isServer || false);
  const hoverColor = color || "bg-discord-primary";
  return (
    <>
      <button
        className={`m-0.5 text-center w-11 h-11 overflow-hidden bg-discord-primary cursor-pointer flex items-center justify-center rounded-full hover:rounded-xl ${hoverColor}`}
      >
        {picData}
      </button>
    </>
  );
};

export default ServerPic;
