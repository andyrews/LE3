import { useState } from "react";

const Message = ({ name, message, children }) => {
  return (
    <>
      {/*Message Body*/}
      <div className="flex my-3 gap-2 items-start justify-start hover:bg-[#c4813f] cursor-pointer">
        {/*Profile Pic*/}
        <div className="avatar">
          <div className="w-10 rounded-full">{children}</div>
        </div>
        {/*Information*/}
        <div className="flex flex-col">
          {/*Name*/}
          <div className="flex gap-1.5 items-center">
            <span className="text-md cursor-pointer hover:underline text-green-600 font-semibold">
              {name}
            </span>
            <h3 className="text-[11px] font-bold text-base-100">
              9/23/22 3:27PM
            </h3>
          </div>
          <h1 className="text-base-200">{message}</h1>
        </div>
      </div>
    </>
  );
};

export default Message;
