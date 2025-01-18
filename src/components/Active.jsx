const Active = ({ members }) => {
    return (
        <>
            <div className="w-72 h-full bg-black2 overflow-y-auto scrollbar-thin scrollbar-webkit">
                <div className="pt-5 pl-4 bg-black2">
                    {/*Online Div*/}
                    <div className="flex-1 flex font-bold text-xs">ONLINE — {members ?
                        (members.filter(member => member.online).length) : 0}</div>
                </div>
                <div className="h-auto">
                    <ul className="menu pt-0 bg-black2 font-medium w-full">
                        {members ?
                            (members.filter(member => member.online).map((member) => (
                                <li key={member.id}>
                                    <a>
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="avatar indicator">
                                                <span className="right-1 bottom-1 indicator-item indicator-end indicator-bottom badge badge-xs bg-green1 border-2 border-black2"></span>
                                                {/*indicator of statuses*/}
                                                <div className="w-8 rounded-full">
                                                    {member.avatar ? (
                                                        <img src={member.avatar} alt="Profile" />
                                                    ) : (
                                                        <span className="text-white">
                                                            {member.username ? member.username.charAt(0).toUpperCase() : 'U'}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col">
                                                {/*div for the status and profile name*/}
                                                <div className="flex items-center">
                                                    {/*div for profile name*/}
                                                    <span className="font-semibold text-sm text-white2">
                                                        {member.displayName ? member.displayName : member.username}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-white3">
                                                    {/*status*/}
                                                    {member.activity ? member.activity : <></>}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))) : <></>}
                    </ul>
                </div>
                <div className="pt-4 pl-4 bg-black2">
                    {/*Offline Div*/}
                    <div className="flex-1 flex font-bold text-xs">OFFLINE — {members ?
                        (members.filter(member => !member.online).length) : 0}</div>
                </div>
                <div className="h-auto">
                    <ul className="menu pt-0 bg-black2 font-medium w-full">
                        {members ?
                            (members.filter(member => !member.online).map((member) => (
                                <li key={member.id} className="opacity-50 hover:opacity-100">
                                    <a>
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="avatar indicator">
                                                {/*indicator of statuses*/}
                                                <div className="w-8 rounded-full">
                                                    {member.avatar ? (
                                                        <img src={member.avatar} alt="Profile" />
                                                    ) : (
                                                        <span className="text-white">
                                                            {member.username ? member.username.charAt(0).toUpperCase() : 'U'}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col">
                                                {/*div for the status and profile name*/}
                                                <div className="flex items-center">
                                                    {/*div for profile name*/}
                                                    <span className="font-semibold text-sm text-white2">
                                                        {member.displayName ? member.displayName : member.username}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))) : <></>}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Active;