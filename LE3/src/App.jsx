import { useState } from "react";
import ServerPic from "./components/ServerPic";
import "./App.css";
import accIcon from "./assets/img/acc-icon.png";

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/*Navbar Servers*/}
      <div className="min-w-[70px] h-full bg-base-200">
        <div className="flex h-full flex-col">
          {/*Server List*/}
          <div className="overflow-y-auto overflow-x-hidden h-full w-full scrollbar-thin scrollbar-webkit">
            <div className="py-2 flex flex-col justify-between">
              <ServerPic color={"hover:bg-discord-accent"} isServer={false}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="w-4 h-4"
                  fill="currentColor"
                  class="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </ServerPic>
              <div className="divider m-0 p-2"></div>
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"r"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"r"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"r"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"r"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"r"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"r"} />
              <ServerPic message={"gg"} />
              <ServerPic message={"gg"} />
              <ServerPic color={"hover:bg-green-600"} isServer={false}>
                <svg
                  class="h-4 w-4 text-green-500 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </ServerPic>
            </div>
          </div>
          <div className="flex justify-between py-2 sticky bottom-0">
            <ServerPic color={"hover:bg-green-600"} isServer={false}>
              <svg
                class="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </ServerPic>
            
          </div>
        </div>
      </div>

      {/*Server Channels*/}
      <div className="w-72 h-full flex flex-col bg-neutral">
        <div className="navbar h-12 min-h-0 px-4 bg-base-100 drop-shadow-2xl">
          <div className="flex-1 font-extrabold">
          toothbrush/ice pick
          </div>
          <div className="flex-none">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <div className="h-auto grow bg-base-100">
          <ul className="menu bg-base-100 font-medium
          [&_li>a]:py-1
          ">
            <li>
              <a href="">
              <svg className="h-5 w-5 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="4" y1="9" x2="20" y2="9" />  <line x1="4" y1="15" x2="20" y2="15" />  <line x1="10" y1="3" x2="8" y2="21" />  <line x1="16" y1="3" x2="14" y2="21" /></svg>
                General
              </a>
            </li>
            <li>
              <a href="">
              <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
              </svg>
                General
              </a>
            </li>
            <li>
              <details open>
                <summary className="uppercase text-xs">Server Boost</summary>
                <ul className="ms-0 ps-0">
                  <li>
                    <a href="">
                    <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                    </svg>
                      Boost</a>
                  </li>
                  <li>
                    <a href="">
                    <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                    </svg>
                      Boost</a>
                  </li>
                </ul>

              </details>
            </li>
          </ul>
        </div>
        <div className="flex w-full p-2 bg-base-100">
          <div className="btn btn-ghost p-1 items-center grow justify-start">
            <div className="avatar indicator">
              <span class="right-1 bottom-1 indicator-item indicator-end indicator-bottom badge badge-xs badge-primary"></span>
                  <div className="w-8 h-8 rounded-full">
                    <img src={accIcon} />
                  </div>
            </div>
            <div className="flex flex-col text-left gap-0.5">
              <div>
                Idol
              </div>
              <div className="">
                hello
              </div>
            </div>
          </div>
          
          <div className="flex flex-row items-center gap-0.5
          [&_button]:btn 
          [&_button]:btn-ghost
          [&_button]:px-1.5
          [&_button]:w-8
          [&_button]:h-8
          [&_button]:min-h-0">
            <button className="">
              <svg class="h-8 w-8  "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="9" y="2" width="6" height="11" rx="3" />  <path d="M5 10a7 7 0 0 0 14 0" />  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" /></svg>
            </button>
            <button className="btn btn-ghost">
              <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="13" rx="2" width="5" height="7" />  <rect x="15" y="13" rx="2" width="5" height="7" />  <path d="M4 15v-3a8 8 0 0 1 16 0v3" /></svg>
            </button>
            <button className="btn btn-ghost">
              <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
            </button>
          </div>
          
        </div>

      </div>

      <div className="flex flex-col w-full bg-primary">
        <div className="p-3 flex justify-between items-center sticky top-0 bg-secondary shadow:md border-b-2">
          <div className="flex gap-2 items-center">
          <svg class="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="4" y1="9" x2="20" y2="9" />  <line x1="4" y1="15" x2="20" y2="15" />  <line x1="10" y1="3" x2="8" y2="21" />  <line x1="16" y1="3" x2="14" y2="21" /></svg>
          <h1>TITE</h1>
          </div>
          <div className="flex gap-2 items-center">
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
              <circle cx="12" cy="12" r="1" /> <circle cx="12" cy="5" r="1" />{" "}
              <circle cx="12" cy="19" r="1" />
            </svg>
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
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />{" "}
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
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
              <circle cx="12" cy="11" r="3" />{" "}
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <svg
              class="h-6 w-6"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <input type="text" placeholder="Search" className="p-1 font-xs bg-accent rounded-md"></input>
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
              <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
              <path d="M4 13h3l3 3h4l3 -3h3" />
            </svg>
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
              <circle cx="12" cy="12" r="9" />{" "}
              <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
            </svg>
          </div>
        </div>
        {/*Channel Messages*/}
        <div className="flex h-full w-full">
          <div className="w-full h-full"></div>
          <div className="divider divider-neutral divider-horizontal "></div>
          {/*Active Now (if main page) or Active Members (if in server)*/}
          <div className="w-60 h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
