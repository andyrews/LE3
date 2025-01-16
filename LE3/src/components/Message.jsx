import { useState } from "react";

const Message = ({ name, message, children }) => {
  return (
    <>
      {/*Message Body*/}
      <div className="p-3 group indicator w-full flex my-1 gap-2 items-start justify-start hover:bg-[#c4813f] rounded-md">
        <div className="opacity-0 p-3 group-hover:opacity-100 rounded-md bg-secondary shadow-xl indicator-item right-36 badge badge-secondary">
          <div className="flex gap-2 items-center text-white font-semibold">
            <button
              className="tooltip tooltip-top w-5 h-5 bg-white rounded-sm"
              data-tip=":white-large-square:"
            ></button>
            <button
              className="tooltip tooltip-top w-5 h-5 bg-green-500 rounded-sm"
              data-tip=":green-square:"
            ></button>
            <button
              className="tooltip tooltip-top w-5 h-5 bg-yellow-400 rounded-sm"
              data-tip=":yellow-square:"
            ></button>
            <div className="divider divider-horizontal m-0 py-1"></div>
            <button
              className="tooltip tooltip-top text-primary"
              data-tip="Add Reaction"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button
              className="tooltip tooltip-top text-primary"
              data-tip="Reply"
            >
              <svg
                class="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l5 -5m0 10l-5 -5" />
              </svg>
            </button>
            <button
              className="tooltip tooltip-top text-primary"
              data-tip="Forward"
            >
              <svg
                class="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-5 -5m0 10l5 -5" />
              </svg>
            </button>
            <button
              className="tooltip tooltip-top text-primary"
              data-tip="More"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
