import { useEffect, useState } from 'react'
import icon from './assets/discordIcon+name.svg'
import homeBG from './assets/landingPagePlaceholder.jpeg'
import './App.css'
import { Link } from 'react-router'

import useGlobal from './core/discordStore.js'
function App() {
  useGlobal.getState().resetStore();
  return (
    <>
    <div className='relative w-screen h-screen items-center justify-center overflow-auto m-0 justify-center'>
      <div className='flex justify-between items-center w-full p-4'>
        <a href='/' className='ml-7 focus:outline'><img className='min-w-max'src={icon}></img></a>
        <div className='space-x-4 max-md:hidden'>
          <a>Download</a>
          <a>Nitro</a>
          <a>Discover</a>
          <a>Quests</a>
          <a>Safety</a>
          <a>Support</a>
          <a>Blog</a>
          <a>Careers</a>
        </div>
        <div className='mr-7 bg-white1 rounded-full px-4 py-2'>
          <Link to="/login" className='text-sm text-blue2 font-bold'>Login</Link></div>
      </div>
      <img className='fixed top-0 w-full' style={{zIndex: '-1'}} src={homeBG}/>
    </div>
    </>
  )
}

export default App
