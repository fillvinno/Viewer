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
import CreateVideo from './pages/CreateVideo/CreateVideo';
import PlaylistCreate from './pages/PlaylistCreate/PlaylistCreate';
import FindVideo from './pages/FindVideo/FindVideo';
import { useSelector } from 'react-redux';
import Settings from './pages/Settings/Settings';

function App() {
  const auth = useSelector(state => state.auth.isAuth)
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
  console.log(auth)
  return (
    <BrowserRouter>
      {
        auth ? 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/player' element={<VideoPlayer/>}/>
            <Route path='/video/:id' element={<VideoPlayer/>}/>
            <Route path='/channel/:id' element={<ChannelFeatured/>}/>
            <Route path='/channel/:id/featured' element={<ChannelFeatured/>}/>
            <Route path='/channel/:id/playlists' element={<ChannelPlaylists/>}/>
            <Route path='/channel/:id/channels' element={<ChannelChannels/>}/>
            <Route path='/channel/:id/about' element={<ChannelAbout/>}/>
            <Route path='/playlist/:id' element={<Playlist/>}/>
            <Route path='/create' element={<CreateVideo/>}/>
            <Route path='/create-playlist' element={<PlaylistCreate/>}/>
            <Route path='/find/:title' element={<FindVideo/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        :
          <Routes>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      }
      {/* {
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/player' element={<VideoPlayer/>}/>
            <Route path='/video/:id' element={<VideoPlayer/>}/>
            <Route path='/channel/:id' element={<ChannelFeatured/>}/>
            <Route path='/channel/:id/featured' element={<ChannelFeatured/>}/>
            <Route path='/channel/:id/playlists' element={<ChannelPlaylists/>}/>
            <Route path='/channel/:id/channels' element={<ChannelChannels/>}/>
            <Route path='/channel/:id/about' element={<ChannelAbout/>}/>
            <Route path='/playlist/:id' element={<Playlist/>}/>
            <Route path='/create' element={<CreateVideo/>}/>
            <Route path='/create-playlist' element={<PlaylistCreate/>}/>
            <Route path='/find/:title' element={<FindVideo/>}/>
        
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      } */}
    </BrowserRouter>
  );
}

export default App;
