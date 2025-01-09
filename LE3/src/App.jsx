import { useState } from "react";
import ServerPic from "./components/ServerPic";
import "./App.css";

function App() {
  return (
    <div className="flex w-screen h-screen">
      {/*Navbar Servers*/}
      <div className="w-24 h-full bg-discord-tertiary">
        <div className="flex h-full flex-col">
          {/*Server List*/}
          <div className="overflow-y-auto overflow-x-hidden h-full w-full scrollbar-thin scrollbar-webkit">
            <div className="py-2 flex flex-col items-center">
              <ServerPic message={"rt"} color={"hover:bg-discord-accent"}/>
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
              <ServerPic message={"r"} color={"hover:bg-green-600"}/>
            </div>
          </div>
          <div className="justify-center flex py-2 sticky bottom-0">
            <ServerPic message={"oomp"} color={"hover:bg-green-600"}/>
          </div>
        </div>
      </div>

      {/*Server Channels*/}
      <div className="w-64 h-full bg-discord-secondary"></div>

      <div className="flex w-full bg-discord-primary">
        {/*Channel Messages*/}
        <div className="w-full h-full"></div>
        <div className="divider divider-horizontal"></div>
        {/*Active Now (if main page) or Active Members (if in server)*/}
        <div className="w-60 h-full"></div>
      </div>
    </div>
  );
}

export default App;
