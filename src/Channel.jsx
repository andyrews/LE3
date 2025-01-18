import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import useGlobal from "./core/discordStore.js";

function Channel() {
    const { channelId } = useParams();
    const location = useLocation();
    const [serverId, setServerId] = useState(null);
    const currUser = useGlobal((state) => state.currentUser);
    const [channelDetails, setChannelDetails] = useState(null);
    const getChannelDetails = useGlobal((state) => state.getChannelDetails);

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const serverId = pathParts[pathParts.length - 2];
        setServerId(serverId);
    }, [location.pathname]);

    useEffect(() => {
        if (serverId && channelId) {
            console.log("Channel ID passed:", channelId);
            const channel = getChannelDetails(serverId, channelId);
            console.log("channelid and serverid", channelId, serverId); // Log the result
            setChannelDetails(channel);
            console.log("channelDetails", channelDetails);
        }
    }, [channelId, serverId, getChannelDetails]);

    // Log the channelDetails after it has been updated
    useEffect(() => {
        console.log("Updated channel details:", channelDetails);
    }, [channelDetails]);

    return(<>
        <div className="navbar h-12 min-h-0 px-4 bg-black4 border-b-2 shadow-xs border-black1">
            <div className="navbar-start items-center space-x-2">
                <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#80848e"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    {" "}
                    <line x1="4" y1="9" x2="20" y2="9" />{" "}
                    <line x1="4" y1="15" x2="20" y2="15" />{" "}
                    <line x1="10" y1="3" x2="8" y2="21" />{" "}
                    <line x1="16" y1="3" x2="14" y2="21" />
                </svg>
                <h1 className="font-extrabold">{channelDetails ? channelDetails.name : "Loading..."}</h1>
            </div>
        </div>
    </>);
}
export default Channel;
