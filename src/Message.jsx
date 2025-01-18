import { useState } from "react";

const Message = ({ message, sender }) => {
    if (!sender) {
        console.error("Sender data is missing!");
        return null; // Prevent rendering if sender is undefined
      }
  const timeoptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return (
    <>
      {/*Message Body*/}
      <div className="p-3 group indicator w-full flex my-1 gap-2 items-start justify-start hover:bg-black3 rounded-md">
        <div className="opacity-0 p-1 group-hover:opacity-100 hover:border-black5 hover:shadow-lg rounded-md
        bg-black2 shadow-xl indicator-item right-36">
          <div className="flex gap-2 items-center text-white font-semibold">
            <button
              className="tooltip tooltip-top w-5 h-5 rounded-sm"
              data-tip=":laughing:"
            >😆</button>
            <button
              className="tooltip tooltip-top w-5 h-5 rounded-sm"
              data-tip=":heart:"
            >❤️</button>
            <button
              className="tooltip tooltip-top w-5 h-5 rounded-sm"
              data-tip=":rofl:"
            >🤣</button>
            <div className="divider divider-horizontal m-0 py-1"></div>
            <button
              className="tooltip tooltip-top text-white5 hover:text-white1"
              data-tip="Add Reaction"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button
              className="tooltip tooltip-top text-white5 hover:text-white1"
              data-tip="Reply"
            >
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l5 -5m0 10l-5 -5" />
              </svg>
            </button>
            <button
              className="tooltip tooltip-top text-white5 hover:text-white1"
              data-tip="Forward"
            >
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-5 -5m0 10l5 -5" />
              </svg>
            </button>
            <button
              className="tooltip tooltip-top text-white5 hover:text-white1"
              data-tip="More"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="1" />{" "}
                <circle cx="19" cy="12" r="1" /> <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>
        {/*Profile Pic*/}
        <div className="avatar">
          <div className="w-10 rounded-full">
            {sender.avatar ? (
              <img src={sender.avatar} alt="Profile" />
            ) : (
              <span className="text-white">
                {sender.username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>
        {/*Information*/}
        <div className="flex flex-col">
          {/*Name*/}
          <div className="flex gap-1.5 items-center">
            <span className="text-md cursor-pointer hover:underline text-white1 font-semibold">
              {sender.username}
            </span>
            <h3 className="text-[11px] font-bold text-white6">
              {new Intl.DateTimeFormat('en-GB', timeoptions).format(new Date(message.timestamp))}
            </h3>
          </div>
          <h1 className="text-white5">{message.content}</h1>
        </div>
      </div>
    </>
  );
};

export default Message;
