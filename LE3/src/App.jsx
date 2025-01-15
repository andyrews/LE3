import { useState } from "react";
import ServerPic from "./components/ServerPic";
import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen">
      {/*Navbar Servers*/}
      <div className="min-w-[70px] h-full bg-base-100">
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
      <div className="w-72 h-full bg-accent">
        <div className="navbar h-12 min-h-0 px-4 bg-base-100">
          <div className="flex-1 font-extrabold">
          toothbrush/ice pick
          </div>
          <div className="flex-none">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <ul className="menu bg-base-200">
          <li>
            <a href="">
              General
            </a>
          </li>
        </ul>

      </div>

      <div className="flex w-full bg-primary">
        {/*Channel Messages*/}
        <div className="w-full h-full"></div>
        <div className="divider divider-neutral divider-horizontal "></div>
        {/*Active Now (if main page) or Active Members (if in server)*/}
        <div className="w-60 h-full"></div>
      </div>
    </div>
  );
}

export default App;
