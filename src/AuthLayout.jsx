import background from './assets/loginBackground.svg'
import icon from './assets/discordIcon+name.svg'
import { Outlet } from "react-router";
import './App.css'

function AuthLayout() {
  return (
    <>
        <div className='relative w-screen h-screen overflow-auto m-0'>
            <img className='relative' style={{top: '48px', left: '48px', zIndex: '1'}} src={icon}/>
            <img className='fixed w-full h-full top-0' src={background}/>
            <div className="absolute justify-center items-center flex flex-col bg-black4 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-md space-y-4" style={{
              width:'486px', zIndex: '2'}}>
              <Outlet />
          </div>
        </div>
    </>
  )
}

export default AuthLayout
