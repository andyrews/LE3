import friendIcon from '../assets/friends.svg';
import shopIcon from '../assets/shop.svg';
import helpIcon from '../assets/help.svg';
import wumpus from '../assets/wumpus.svg';
import arrow from '../assets/arrow.svg';
import discover from '../assets/discoverIcon.svg';

function Channel({ currUser }) {
    return (<>
        <div className="w-72 h-full flex flex-col bg-black2">
            <div className="navbar h-12 min-h-0 px-4 bg-black2 border-b-2 shadow-xs border-black1">
                <div className="flex px-3 py-1 w-full items-center font-xs bg-black1 rounded-md">
                    <input
                        type="text"
                        placeholder="Find or Start a conversation"
                        className="w-full bg-transparent text-lg focus:outline-none text-sm"
                    ></input></div>
            </div>
            <div className="flex-1 bg-black2 overflow-y-hidden overflow-x-hidden scrollbar-thin scrollbar-webkit">
                <div className='m-2'>
                    <div className='flex bg-gray1 items-center rounded-md px-3 py-2 space-x-4 cursor-pointer hover:bg-black8'>
                        <img src={friendIcon}></img>
                        <p className='text-white1'>Friends</p>
                    </div>
                    <div className='flex opacity-50 items-center rounded-md px-3 py-2 space-x-4 cursor-pointer hover:bg-black8 hover:opacity-80'>
                        <img src={shopIcon}></img>
                        <p className='text-white1'>Shop</p>
                    </div>
                    <div className='flex pt-3 items-center mx-3 justify-between'>
                        <p className='text-xs text-white2 font-bold hover:text-white1'>DIRECT MESSAGES</p>
                        <div className='tooltip tooltip-top cursor-pointer' data-tip='Create DM' style={{zIndex: '1'}}>
                            <p className='text-xl text-white2 '>+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full p-2 bg-black5">
          <div className="btn btn-ghost p-1 items-center grow justify-start">
            <div className="avatar indicator">
              <span className="right-1 bottom-1 indicator-item indicator-end indicator-bottom badge badge-xs bg-green1"></span>
              <div className="w-8 h-8 rounded-full">
                <div className="bg-blue1 text-white rounded-full w-full h-full flex items-center justify-center">
                  {currUser && currUser.avatar ? (
                      <img src={currUser.avatar} alt="Profile" />
                    ) : (
                      <span className="text-white">
                        {currUser && currUser.username ? currUser.username.charAt(0).toUpperCase() : 'U'}
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left gap-0.5">
              <div>{currUser && currUser.displayName ? currUser.displayName : currUser.username}</div>
              <div>{currUser && currUser.displayName ? "Online": currUser.username}</div>
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
            <div className="navbar h-12 min-h-0 px-4 w-full bg-black4 border-b-2 shadow-xs border-black1">
                <div className="navbar-start items-center space-x-7">
                    <div className='flex items-center space-x-2'>
                        <img className='opacity-50' src={friendIcon}></img>
                        <p className=' text-white1 pr-2'>Friends</p>
                        <div className="h-8 w-0.5 bg-black8"></div>
                    </div>
                    <p className='px-2 rounded-md text-white2 hover:text-white1 hover:bg-black6 max-md:hidden'>Online</p>
                    <p className='px-2 rounded-md text-white2 hover:text-white1 hover:bg-black6 max-md:hidden'>All</p>
                    <p className='px-2 rounded-md text-white2 hover:text-white1 hover:bg-black6 max-md:hidden'>Pending</p>
                    <p className='px-2 rounded-md text-white2 hover:text-white1 hover:bg-black6 max-md:hidden'>Blocked</p>
                    <p className='text-green1 text-nowrap font-bold max-md:hidden'>Add Friend</p>
                </div>
                <div className="navbar-end items-center space-x-4">
                <svg x="0" y="0" className="icon_fc4f04" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z" fill="currentColor" className=""></path><path d="M20.76 12.57c.4.3 1.23.13 1.24-.37V12a10 10 0 1 0-18.44 5.36c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 4.76-2.43Z" fill="currentColor" className=""></path></svg>
                <svg x="0" y="0" className="icon_fc4f04" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z" clipRule="evenodd" className=""></path></svg>
                <img src={helpIcon}/>
                </div>
            </div>
            <div className="flex h-full w-full bg-black4" style={{zIndex: '-1'}}>
                <div className="w-full h-full flex flex-col border-r-2 border-black6 s">
                    <div className='w-full border-b-2 border-black6'>
                    <div className='space-y-4 my-4 mx-7'>
                        <p className='text-white1 font-bold'>ADD FRIEND</p>
                        <p className='text-sm'>You can add friends with their Discord username.</p>
                        <div className="flex px-2 py-1 w-full items-center font-xs bg-black1 rounded-md">
                    <input
                        type="text"
                        placeholder="You can add friends with their Discord username."
                        className="w-full bg-transparent text-white1 focus:outline-none text-md opacity-80 focus:opacity-100"
                    > </input><button className='btn-sm rounded-md m-1 text-white1 opacity-50 hover text-nowrap bg-blue1' disabled="disabled" >Send Friend Request</button></div>
                    </div>
                        
                    </div>
                    <div className='space-y-4 my-4 mx-7'>
                        <p className='text-white1 font-bold'>OTHER PLACES TO MAKE FRIENDS</p>
                        <button className='flex px-2 py-1 w-full max-w-sm items-center font-xs bg-black2 outline outline-1 outline-black6 shadow-sm rounded-md hover:bg-black6'>
                        <div className='bg-green1 p-2 mx-2 my-1 rounded-lg'>
                            <img className='filter invert' src={discover}/>
                        </div>
                            <p className='flex-1 text-white1 text-left'>Explore Discoverable Servers</p>
                            <img className='-rotate-90' src={arrow}/>
                        </button>
                        <div className='flex flex-col space-y-10 items-center justify-center text-center'>
                            <img src={wumpus}/>
                            <p className='text-white2'>Wumpus is waiting on friends. You don't have to though!</p>
                        </div>
                    </div>
                </div>
                <div className='w-96 h-full bg-black4 overflow-y-auto m-5'>
                    <p className='text-white2  text-xl font-bold'>Active Now</p>
                    <div className='flex flex-col pt-7 items-center justify-center text-center space-y-1'>
                        <p className='font-bold text-white2'>It's quiet for now...</p>
                        <p className='text-sm'>When a friend starts an activity—like playing agame or hanging out on voice—we'll show it here!</p>
                    </div>
                </div>

            </div>
        </div>
    </>);
}
export default Channel;
