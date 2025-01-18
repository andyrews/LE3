import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import App from './App.jsx'
import AuthLayout from './AuthLayout.jsx';
import Login from './Login.jsx'
import Register from './Register.jsx'
import ServerLayout from './ServerLayout.jsx'
import ChannelLayout from './ChannelLayout.jsx'
import Channel from './Channel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
	    <Routes>
		    <Route index element={<App/>}/>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
        <Route path="channels/" element={<ServerLayout />}>
          <Route path=":serverId/" element={<ChannelLayout />}>
            <Route path=":channelId" element={<Channel />}/></Route>
        </Route>
	    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
