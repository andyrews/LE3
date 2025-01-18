import { useState } from 'react'
import useUser from './core/discordStore.js'
import { useNavigate, Link } from "react-router";
import './App.css'

function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [userError, setUserError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const login = useUser((state) => state.login)
  const navigate = useNavigate();


  function onLogin(e) {
    e.preventDefault(); // Prevent form submission refresh
    console.log("Login: ", user, pass);

    const failUsername = !user;
    if (failUsername) {
      setUserError("Username not provided");
    }

    const failPassword = !pass;
    if (failPassword) {
      setPasswordError("Password not provided");
    }

    if (failUsername || failPassword) {
      return;
    }

    try {
      login(user, pass); // Zustand `login` function
      alert("Login successful!");
      // Navigate to the dashboard
      navigate("/channels/@me")
    } catch (error) {
      alert(error.message); // Show invalid credentials message
    }
  }

  return (
    <>
      <div className='flex flex-col space-y-1 items-center text-center'>
        <h1 className='text-2xl font-bold text-white1'>Welcome back!</h1>
        <p className='text-md text-white2'>We're so excited to see you again!</p>
      </div>
      <form className='flex flex-col space-y-3 w-full' onSubmit={onLogin}>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>EMAIL OR PHONE NUMBER
            <p className='pl-1 text-xs text-red1'>*</p></label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="text" value={user} onChange={(e) => setUser(e.target.value)} required></input>
        </div>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>PASSWORD
            <p className='pl-1 text-xs text-red1'>*</p></label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="password" value={pass} onChange={(e) => setPass(e.target.value)} required></input>
          <a className='text-xs text-bluelink cursor-pointer hover:underline'>Forgot your password?</a>
        </div>
        <div className='w-full flex flex-col'>
          <button className="w-full bg-blue1 hover:bg-blue2 text-white4 font-bold py-2 px-4 rounded-sm focus:outline-none" type='submit'>Log In</button>
          <span className='flex text-xs pt-2'><p className='text-white3'>Need an account?</p>
            <Link className='text-bluelink opacity-100 cursor-pointer pl-1 hover:underline' to="/register">Register</Link></span>
        </div>
      </form>
    </>

  )
}

export default Login
