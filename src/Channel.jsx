import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import useGlobal from "./core/discordStore.js";
import Message from "./components/Message.jsx";
import Active from "./components/Active.jsx";
import Toast from "./components/Toast.jsx";

function Channel() {
    
    const location = useLocation();
    const { channelId } = useParams();
    const [serverId, setServerId] = useState(null);
    const currUser = useGlobal((state) => state.currentUser);
    const [channelDetails, setChannelDetails] = useState(null);
    const [serverName, setServerName] = useState(null);
    const [messages, setMessages] = useState([]);
    const [members, setMembers] = useState(null);
    
    const getChannelDetails = useGlobal((state) => state.getChannelDetails);
    const getServerDetails = useGlobal((state) => state.getServerDetails);
    const getMessages = useGlobal((state) => state.getMessages);
    const getMembers = useGlobal((state) => state.getMembers);
    const sendMessage = useGlobal((state) => state.sendMessage);
    const [newMessage, setNewMessage] = useState('');

    

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const serverId = pathParts[pathParts.length - 2];
        setServerId(serverId);
    }, [location.pathname]);

    useEffect(() => {
        if (serverId && channelId) {
            const cDetails = getChannelDetails(serverId, channelId);
            const sDetails = getServerDetails(serverId);
            const fetchedMessages = getMessages(serverId, channelId);
            const serverMembers = getMembers(serverId);

            setChannelDetails(cDetails);
            setServerName(sDetails.name);
            setMessages(fetchedMessages);
            setMembers(serverMembers);
        }
    }, [serverId, channelId, getChannelDetails, getServerDetails, getMessages, getMembers]);

    // Log the channelDetails after it has been updated
    useEffect(() => {
        console.log("Updated channel details:", channelDetails);
    }, [channelDetails]);

    

    const handleSendMessage = async () => {
        if (!newMessage.trim()) return;
    
        const sentMessage = await sendMessage(serverId, channelId, currUser.id, newMessage.trim());
        console.log("Sent message:", sentMessage); // Check if the message is being sent correctly
    
        if (sentMessage) {
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, sentMessage];
                console.log("Updated messages:", updatedMessages); // Check the updated messages state
                return updatedMessages;
            });
        }
        setNewMessage("");
    };
    

    return (<>
        <div className="navbar h-12 min-h-0 px-4 bg-black4 border-b-2 shadow-xs border-black1">
            <div className="navbar-start items-center space-x-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> {" "} <line x1="4" y1="9" x2="20" y2="9" />{" "} <line x1="4" y1="15" x2="20" y2="15" />{" "} <line x1="10" y1="3" x2="8" y2="21" />{" "} <line x1="16" y1="3" x2="14" y2="21" /></svg>
                <h1 className="font-extrabold">{channelDetails ? channelDetails.name : "Loading..."}</h1>
            </div>
            <div className="navbar-end items-center space-x-2">
                <div className="tooltip font-extrabold tooltip-bottom" data-tip="Threads">
                    <svg className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{" "}<circle cx="12" cy="12" r="10" />{" "}<path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg></div>
                <div className="tooltip font-extrabold tooltip-bottom" data-tip="Notification Settings">
                    <svg className="h-6 w-6 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        {" "}<path stroke="none" d="M0 0h24v24H0z" />{" "}<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />{" "}<path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg></div>
                <div className="tooltip font-extrabold tooltip-bottom" data-tip="Pinned Messages"><svg className="h-6 w-6 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">{" "}<path stroke="none" d="M0 0h24v24H0z" />{" "}<circle cx="12" cy="11" r="3" />{" "}<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg></div>
                <div className="tooltip font-extrabold tooltip-bottom" data-tip="Member List"><svg className="h-6 w-6 cursor-pointer" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg></div>
                <div className="flex px-3 py-1 items-center font-xs bg-black1 rounded-md">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent focus:outline-none"
                    ></input>
                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">{" "}<path stroke="none" d="M0 0h24v24H0z" />{" "}<circle cx="10" cy="10" r="7" />{" "} <line x1="21" y1="21" x2="15" y2="15" /> </svg>
                </div>
                <div className="tooltip font-extrabold tooltip-bottom" data-tip="Inbox">
                    <svg className="h-6 w-6 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> {" "} <path stroke="none" d="M0 0h24v24H0z" />{" "} <rect x="4" y="4" width="16" height="16" rx="2" />{" "} <path d="M4 13h3l3 3h4l3 -3h3" /></svg>
                </div>
                <div className="tooltip font-extrabold tooltip-bottom" data-tip="Help" >
                    <svg className="h-6 w-6 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    > {" "} <path stroke="none" d="M0 0h24v24H0z" />{" "} <circle cx="12" cy="12" r="9" />{" "} <line x1="12" y1="17" x2="12" y2="17.01" />{" "} <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="flex h-full w-full bg-black4">
            <div className="w-full h-full flex gap-16 flex-col">
                <div className="overflow-auto w-full h-full">
                    <div className="flex flex-col-reverse overflow-auto py-3 w-full h-full">
                        {/*Start Text*/}
                        {messages && messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map((message) => {
                            const sender = members.find(
                                (member) => Number(member.id) === Number(message.senderID)
                            );
                            return (
                                <Message
                                    key={message.id}
                                    message={message}
                                    sender={sender}
                                ></Message>
                            );
                        })}
                        {channelDetails ? (channelDetails.id === 1 && (
                            <div className="text-white5 flex flex-col text-center">
                                <h1 className="text-[2rem] font-extrabold">Welcome to<br />{serverName}</h1>
                                <h3 className="text-sm">This is the beginning of the server</h3>
                            </div>
                        )) : (<></>)}
                    </div>
                </div>
                {/*Bottom Sticky*/}
                <div className="bg-black4 p-3 gap-3 w-full flex sticky bottom-0 justify-center">
                    <div className="flex items-center gap-2 bg-black6 p-2 rounded-md w-full">
                        <div className="dropdown dropdown-top">
                            <svg
                                tabIndex={0}
                                className="h-6 w-6 cursor-pointer"
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
                                <circle cx="12" cy="12" r="9" />{" "}
                                <line x1="9" y1="12" x2="15" y2="12" />{" "}
                                <line x1="12" y1="9" x2="12" y2="15" />
                            </svg>
                            <ul
                                tabIndex={0}
                                className="font-extrabold dropdown-content menu bg-black7 rounded-box z-[1] w-52 p-2 shadow 
                    [&_li>*]:rounded-sm
                    [&_li>*]:px-1"
                            >
                                <li>
                                    <a>
                                        <svg
                                            className="h-6 w-6 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                            />
                                        </svg>
                                        Upload a File
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            className="h-6 w-6 cursor-pointer"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {" "}
                                            <circle cx="12" cy="12" r="10" />{" "}
                                            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                                        </svg>{" "}
                                        Create Thread
                                    </a>
                                </li>
                                <li>
                                    <a>
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
                                            <line x1="4" y1="6" x2="20" y2="6" />{" "}
                                            <line x1="4" y1="12" x2="14" y2="12" />{" "}
                                            <line x1="4" y1="18" x2="18" y2="18" />
                                        </svg>
                                        Create a Poll
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {channelDetails ? (
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSendMessage(e);
                                    }
                                }}
                                placeholder={`Message #${channelDetails.name}`}
                                className="bg-transparent focus:outline-none w-full text-white"
                            />
                        ) : (<></>)}
                        <svg
                            className="h-9 w-9 cursor-pointer"
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
                            <rect x="3" y="8" width="18" height="4" rx="1" />{" "}
                            <line x1="12" y1="8" x2="12" y2="21" />{" "}
                            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />{" "}
                            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-9 w-9 cursor-pointer"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                            />
                        </svg>

                        <svg
                            className="h-9 w-9 cursor-pointer"
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
                            <path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />{" "}
                            <path d="M20 12a8 8 0 1 1 -8 -8" />
                        </svg>
                        <svg
                            className="h-9 w-9 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center p-2 bg-black6 rounded-md ">
                        <svg
                            className="h-8 w-8 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {/*Active Now (if main page) or Active Members (if in server)*/}
            <Active members={members}></Active>
        </div>
        <Toast />
    </>);
}
export default Channel;
