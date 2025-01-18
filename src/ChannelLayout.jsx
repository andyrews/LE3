import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams, Outlet, Link } from 'react-router';
import useGlobal from './core/discordStore.js';
import arrow from './assets/arrow.svg';

function ChannelLayout() {
  const { serverId } = useParams();
  const currUser = useGlobal((state) => state.currentUser);
  const servers = useGlobal((state) => state.servers);
  const [currentServer, setCurrentServer] = useState(null);

  useEffect(() => {
    if (servers && servers.length > 0) {
      const foundServer = servers.find((server) => server.id === parseInt(serverId));
      setCurrentServer(foundServer);
    }
  }, [servers, serverId]);

  const isLoading = !servers || servers.length === 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!currentServer && serverId !== '@me') {
    return <div>Server not found</div>;
  }
  if (serverId === '@me') {
    return <div>Find or start a conversation</div>;
  }

  return (
    <>
      <div className="w-72 h-full flex flex-col bg-black2">
        <div className="navbar h-12 min-h-0 px-4 bg-black2 border-b-2 shadow-xs border-black1">
          <div className="flex-1 font-extrabold">{currentServer.name}</div>
          <img src={arrow} className="flex-none cursor-pointer" />
        </div>
        <div className="flex-1 bg-black2 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-webkit">
          <ul className="menu bg-black2 font-medium [&_li>a]:py-1">
            {Object.entries(currentServer.categories).map(([categoryName, channels]) => (
              <li key={categoryName}>
                <details open>
                  <summary className="uppercase text-xs">{categoryName}</summary>
                  <ul className="ms-0 ps-0">
                    {channels.map((channel) => (
                      <li key={channel.id}>
                        <Link to={`/channels/${currentServer.id}/${channel.id}`} onClick={() => {
                          const { onEnterChannel } = useGlobal.getState();
                          if (onEnterChannel) {
                            onEnterChannel(currentServer.id, channel.id);
                          }
                        }}>
                          {channel.type === "text" && (
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="4" y1="9" x2="20" y2="9" />
                              <line x1="4" y1="15" x2="20" y2="15" />
                              <line x1="10" y1="3" x2="8" y2="21" />
                              <line x1="16" y1="3" x2="14" y2="21" />
                            </svg>
                          )}
                          {channel.type === "voice" && (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          )}
                          {channel.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full p-2 bg-black5">
          <div className="btn btn-ghost p-1 items-center grow justify-start">
            <div className="avatar indicator">
              <span className="right-1 bottom-1 indicator-item indicator-end indicator-bottom badge badge-xs bg-green1"></span>
              <div className="w-8 h-8 rounded-full">
                <div className="bg-blue1 text-white rounded-full w-full h-full flex items-center justify-center">
                  {currUser && currUser.username ? currUser.username[0].toUpperCase() : 'U'}
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left gap-0.5">
              <div>Idol</div>
              <div>hello</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-0.5 [&_button]:btn [&_button]:btn-ghost [&_button]:px-1.5 [&_button]:w-8 [&_button]:h-8 [&_button]:min-h-0">
            <button>
              <svg
                className="h-8 w-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="9" y="2" width="6" height="11" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </button>
            <button className="btn btn-ghost">
              <svg
                className="h-8 w-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="4" y="13" rx="2" width="5" height="7" />
                <rect x="15" y="13" rx="2" width="5" height="7" />
                <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
              </svg>
            </button>
            <button className="btn btn-ghost">
              <svg
                className="h-8 w-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-black3">
        <Outlet />
      </div>
    </>
  );
}

export default ChannelLayout;
