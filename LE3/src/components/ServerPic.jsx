import { useState } from "react";

const ServerPic = ({ message, isServer=true, color, children }) => {
  const [picData, setPicData] = useState(message || "");
  const [server, setServer] = useState(isServer);
  const hoverColor = color || "bg-secondary";
  return (
    <>
      <div className="tooltip tooltip-right flex items-center group gap-0.5"
          data-tip="HELLO"
      >
       <div className={`${server?"bg-white":"bg-transparent"} transition-all duration-300 w-1 h-2 rounded-tr-full rounded-br-full group-hover:h-6`}></div>
        <button
          className={`m-0.5 text-center w-11 h-11 overflow-hidden bg-secondary flex items-center justify-center rounded-full hover:rounded-xl ${hoverColor}`}
        >
          {picData}
          {children}
        </button>
      </div>
    </>
  );
};

export default ServerPic;
