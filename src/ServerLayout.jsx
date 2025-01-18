import './App.css'
import { Link, Outlet } from 'react-router'
import useGlobal from './core/discordStore.js'
import discordIcon from './assets/discordIconTransparent.svg'
import addServerIcon from './assets/addServer.svg';
import discoverIcon from './assets/discoverIcon.svg'

function ServerLayout() {
  const currUser = useGlobal((state) => state.currentUser);
  const servers = useGlobal((state) => state.servers);

  const userServers = servers.filter((server) =>
    server.members.includes(currUser?.id)
  );
  const getAbbreviation = (serverName) => {
    const words = serverName.split(' ');
    const initials = words.map(word => word.charAt(0).toUpperCase());
    let abbreviation = initials.join('');

    // Truncate if abbreviation is longer than 3 characters
    if (abbreviation.length > 3) {
      abbreviation = abbreviation.substring(0, 3) + "..."; // Truncate and add ellipsis
    }

    return abbreviation;
  };

  return (
    <>
      <div className="flex w-screen h-screen overflow-hidden">
        {/* Servers Navbar */}
        <div className="min-w-[70px] h-full bg-black1 flex flex-col items-center  space-y-2 py-3">
          <Link to={`/channels/@me`}>
            <div className="flex items-center justify-start tooltip tooltip-right" data-tip="Direct Messages" style={{ zIndex: '1' }}>
              <button className='btn-square rounded-full flex items-center justify-center bg-black3 hover:bg-blue1 hover:rounded-2xl transition-all duration-400 ease-in-out no-animation focus:no-outline'>
                <img src={discordIcon} className='filter invert' />
              </button>
            </div>
          </Link>
          <div className="h-0.5 w-8 bg-black3"></div>
          {/* Server List */}
          <div className='flex flex-1 flex-col space-y-2'>
            {userServers.map((server) => (
              <Link to={`/channels/${server.id}/${server.lastActiveChannel}`} key={server.id}>
                <div className="flex items-center justify-start tooltip tooltip-right" data-tip={server.name}>
                  <button className='btn-square rounded-full flex items-center justify-center bg-black3 hover:bg-blue1 hover:rounded-2xl transition-all duration-400 ease-in-out no-animation focus:no-outline'>
                    <div className="server-abbreviation">{getAbbreviation(server.name)}</div>
                  </button>
                </div>
              </Link>
            ))}
            <div className="flex items-center justify-start tooltip tooltip-right" data-tip="Add a Server" style={{ zIndex: '1' }}>
            <button className='btn-square rounded-full flex items-center justify-center bg-black3 hover:bg-green1 hover:rounded-2xl transition-all duration-400 ease-in-out no-animation focus:no-outline hover:[&_img]:brightness-200'>
              <img src={addServerIcon}/>
            </button>
          </div>
          </div>
          <div className="flex items-center justify-start tooltip tooltip-right" data-tip="Discover" style={{ zIndex: '1' }}>
            <button className='btn-square rounded-full flex items-center justify-center bg-black3 hover:bg-green1 hover:rounded-2xl transition-all duration-400 ease-in-out no-animation focus:no-outline'>
              <img src={discoverIcon} className='filter invert' />
            </button>
          </div>
        </div>
        {/* Server Channels*/}
        <div className="flex flex-1 bg-black2 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ServerLayout
