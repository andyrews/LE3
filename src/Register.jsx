import { useState } from 'react'
import { Link, useNavigate } from "react-router";
import './App.css'
import useUser from './core/discordStore';

function Register() {
  const registerUser = useUser((state) => state.registerUser);
  const usersBefore = useUser((state) => state.users);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  
  console.log("Users before registration:", usersBefore);
  function onRegister(e) {
    e.preventDefault();
    try {
      registerUser({ username, email, password });
      alert("Registration successful! Please log in.");
      navigate("/login")
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1 className='text-2xl font-bold pb-3 text-white1'>Create an account</h1>
      <form className='flex flex-col space-y-3 w-full' onSubmit={onRegister}>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>EMAIL
            <p className='pl-1 text-xs text-red1'>*</p></label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        </div>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>DISPLAY NAME</label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)}></input>
        </div>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>USERNAME
            <p className='pl-1 text-xs text-red1'>*</p></label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="text" value={username}
            onChange={(e) => setUsername(e.target.value)} required></input>
        </div>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>PASSWORD
            <p className='pl-1 text-xs text-red1'>*</p></label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        </div>
        <div className='w-full flex flex-col'>
          <label className='flex text-xs text-white2 font-bold pb-2'>DATE OF BIRTH
            <p className='pl-1 text-xs text-red1'>*</p></label>
          <input className="p-2 bg-black1 rounded-sm focus:outline-none" type="date" required></input>
        </div>
        <div className='w-full flex items-center'>
          <input className="checkbox checkbox-primary no-animation" type="checkbox"></input>
          <label className='text-xs text-white3 text-wrap pl-1'>(Optional) It's okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</label>
        </div>
        <div className='w-full flex flex-col'>
          <button className="w-full bg-blue1 hover:bg-blue2 text-white1 font-bold py-2 px-4 rounded-sm focus:outline-none" type='submit'>Continue</button>
        </div>
        <div className='w-full flex items-center'>
          <p className='text-xs text-white3 text-wrap pl-1'>By registering, you agree to Discord's <a className='text-xs text-bluelink cursor-pointer hover:underline'>Terms of Service</a> and <a className='text-xs text-bluelink cursor-pointer hover:underline' required>Privacy Policy</a>.</p>
        </div>
        <Link className='text-sm text-bluelink opacity-100 cursor-pointer pl-1 hover:underline' to="/login">Already have an account?</Link>
      </form>
    </>
  )
}

export default Register
