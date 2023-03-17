import React from 'react'
import {Routes, Route} from 'react-router-dom'
import 'normalize.css';
import Home from './pages/Home/Home';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/player' element={<VideoPlayer/>}/>
      <Route path='/trending' element={<h1>trending</h1>}/>
      <Route path='/video:id' element={<VideoPlayer/>}/>
    </Routes>
  );
}

export default App;
