import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import 'normalize.css';
import Home from './pages/Home/Home';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AuthService from './services/AuthService';
import { setAuth, setUser } from './store/slices/authSlice'
import ChannelFeatured from './pages/Channel/ChannelFeatured/ChannelFeatured'
import ChannelPlaylists from './pages/Channel/ChannelPlaylists/ChannelPlaylists'
import ChannelChannels from './pages/Channel/ChannelChannels/ChannelChannels'
import ChannelAbout from './pages/Channel/ChannelAbout/ChannelAbout'
import Playlist from './pages/Playlist/Playlist';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorage.getItem('token')) {
          const response = await AuthService.checkAuth()
          console.log(response)
          // запись токена в локалальное хранилище
          localStorage.setItem('token', response.data.accessToken)
          // меняем состояние в сторе
          dispatch(setAuth(true))
          dispatch(setUser(response.data.user))
        }
      } catch (e) {
        console.log(e.response?.data?.message)
      }
    }
    fetchData()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/player' element={<VideoPlayer/>}/>
        <Route path='/video:id' element={<VideoPlayer/>}/>
        <Route path='/trending' element={<h1>trending</h1>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/channel' element={<ChannelFeatured/>}/>
        <Route path='/channel/featured' element={<ChannelFeatured/>}/>
        <Route path='/channel/playlists' element={<ChannelPlaylists/>}/>
        <Route path='/channel/channels' element={<ChannelChannels/>}/>
        <Route path='/channel/about' element={<ChannelAbout/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
