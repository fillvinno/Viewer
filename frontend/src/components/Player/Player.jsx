import React from 'react'
import styles from './Player.module.css'
import video from '../../videos/video.mp4'
import poster from '../../img/preview.png'
import { useRef, useState, useEffect } from 'react'
import backward5 from '../../img/videoplayer/backward-5.svg'
import play from '../../img/videoplayer/play.svg'
import forward5 from '../../img/videoplayer/forward-5.svg'
import previous from '../../img/videoplayer/previous.svg'
import pause from '../../img/videoplayer/pause.svg'
import next from '../../img/videoplayer/next.svg'
import setting from '../../img/videoplayer/setting.svg'
import fullscreenIcon from '../../img/videoplayer/fullscreen.svg'
import volume from '../../img/videoplayer/volume.svg'
import muted from '../../img/videoplayer/muted.svg'
import exitFullscreenIcon from '../../img/videoplayer/exitFullscreen.svg'
import VideoCards from '../../components/VideoCards/VideoCards'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import PlayerDescription from '../PlayerDescription/PlayerDescription'

export default function Videoplayer() {

  const videoRef = useRef(null)
  const selectRef = useRef(null)
  const timeRef = useRef(null)
  const videoWrapRef = useRef()

  const [playing, setPlaying] = useState(false)
  const [videoTime, setVideoTime] = useState(0)
  const [hideControls, setHideControls] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [videoSpeed, setVideoSpeed] = useState(1)
  const [isMenuHidden, setIsMenuHidden] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [videoVolume, setVideoVolume] = useState(localStorage.getItem('video-volume') || 100)
  const [fullscreen, setFullscreen] = useState(false)

  const videoHandler = (control) => {
    if (control === 'play') {
      videoRef.current.play()
      setPlaying(true)
      setTimeout(() => {
        setHideControls(true)
      }, 2500);
      const vid = document.getElementById('video1')
      setVideoTime(vid.duration)
    } else if (control === 'pause') {
      videoRef.current.pause()
      setPlaying(false)
      setHideControls(false)
    }
  }

  const toggleVolumeChange = (event) => {
    let manualVolume = event.target.value

    if (manualVolume == 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }

    localStorage.setItem('video-volume', manualVolume)
    setVideoVolume(manualVolume)
    
    videoRef.current.volume = manualVolume / 100

    event.target.style.backgroundSize = manualVolume + '% 100%'
  }

  const toggleFullscrean = () => {
    if (!fullscreen) {
      videoWrapRef.current.webkitRequestFullscreen()
      setFullscreen(!fullscreen)  
    } else if (fullscreen) {
      document.webkitExitFullscreen()
      setFullscreen(!fullscreen)
    }
  }

  useEffect(() => {
    setVideoVolume(localStorage.getItem('video-volume'))
    videoRef.current.volume = videoVolume / 100
    if (videoVolume == 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }, [videoVolume])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    isMuted
      ? (videoRef.current.muted = true)
      : (videoRef.current.muted = false)
  }, [isMuted, videoRef])

  const moveForward = () => {
    videoRef.current.currentTime += 5
  }

  const moveBackward = () => {
    videoRef.current.currentTime -= 5
  }

  document.body.onkeydown = (e) => {
    if (e.code === 'ArrowLeft') {
      moveBackward()
    }
    if (e.code === 'ArrowRight') {
      moveForward()
    }
    if (e.code === 'Space') {
      videoHandler(playing ? 'pause' : 'play')
    }
    if (fullscreen) {
      if (e.code === 'F11' || e.code === 'Escape') {
        toggleFullscrean()
      }
    }
    if (e.code === 'KeyF') {
      toggleFullscrean()
    }
    if (e.code === 'KeyM') {
      toggleMute()
    }
  }

  const handleClick = () => {
    videoHandler(playing ? 'pause' : 'play')
  }

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value)
    videoRef.current.playbackRate = speed
    setVideoSpeed(speed)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const videoProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      timeRef.current.style.backgroundSize = videoProgress + '% 100%'
      setProgress(videoProgress)
      setCurrentTime(videoRef.current.currentTime)
    }, 1)

    return () => {
      clearInterval(timer)
    }

  }, [videoRef, timeRef])

  // перемотка через ползунок
  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value)
    videoRef.current.currentTime = (videoRef.current.duration / 100 * manualChange)
    setCurrentTime(videoRef.current.currentTime)

    const videoProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
    event.target.style.backgroundSize = videoProgress + '% 100%'
  }

  const hideMenu = () => setIsMenuHidden(!isMenuHidden)
  useOnClickOutside(selectRef, hideMenu)

  return (
    <div className={styles.pageWrap}>
      <div className={styles.upsidePlayer}>
        <div className={fullscreen ? styles.fullscreenWrap : styles.videoWrap} ref={videoWrapRef}>
          <video id='video1' ref={videoRef} onClick={handleClick} poster={poster} className={fullscreen ? styles.fullscreenPlayer : styles.player}>
            <source src={video} />
          </video>
          
          <div className={fullscreen ? styles.fullscreenControlsContainer : styles.controlsContainer}>
            <div className={hideControls ? styles.hideControls : styles.controls}>
              <img src={backward5} onClick={moveBackward} alt="" className={styles.controlsIcon} />
              {playing ? (
                <img src={pause} onClick={() => videoHandler("pause")} alt="" className={fullscreen ? styles.fullscreenControlsIconPlay : styles.controlsIconPlay} />
              ) : (
                <img src={play} onClick={() => videoHandler("play")} alt="" className={fullscreen ? styles.fullscreenControlsIconPlay : styles.controlsIconPlay} />
              )}
              <img src={forward5} onClick={moveForward} alt="" className={styles.controlsIcon} />
            </div>
          </div>

          <div className={fullscreen ? styles.fullscreenTimeControls : styles.timeControls}>
          
            <input type='range' min='0' max='100' ref={timeRef} onChange={handleVideoProgress} value={progress} className={fullscreen ? styles.fullscreenTimeProgressBar :styles.timeProgressBar} />

            <div className={fullscreen ? styles.fullscreenTimeBtns : styles.timeBtns}>
              <div className={styles.leftSideBtns}>
                <img src={previous} alt="" className={styles.smallIcon} />
                {
                  playing ? (
                    <img src={pause} onClick={() => videoHandler("pause")} alt="" className={styles.smallIcon} />
                  ) : (
                    <img src={play} onClick={() => videoHandler("play")} alt="" className={styles.smallIcon} />
                  )
                }
                <img src={next} alt="" className={styles.smallIcon} />

                <div className={styles.controlsTime} onClick={handleClick}>
                  <p>{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2) + " / " + Math.floor(videoTime / 60) + ':' + ('0' + Math.floor(videoTime % 60)).slice(-2)}</p>
                </div>
              </div>
              <div className={styles.rightSideBtns}>
                {
                  !isMuted ? (
                    <img src={volume} alt="" onClick={toggleMute} className={styles.smallIcon}/>
                  ) : (
                    <img src={muted} alt="" onClick={toggleMute} className={styles.smallIcon}/>
                  )
                }
                <div className={styles.volume}>
                  <input type="range" min='0' max='100' onChange={toggleVolumeChange} onLoad={toggleVolumeChange} value={videoVolume} style={{backgroundSize: `${videoVolume}% 100%`}} className={styles.volumeBar}/>
                </div>
                <img src={setting} alt="" onClick={hideMenu} className={styles.smallIcon} />
                {isMenuHidden && 
                  <select ref={selectRef} className={styles.selectSpeed} value={videoSpeed} onChange={(e) => handleVideoSpeed(e)}>
                    <option value="0.25">0.25x</option>
                    <option value="0.5">0.5x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2">2x</option>
                    <option value="4">4x</option>
                  </select>
                }
                {
                  !fullscreen ? (
                    <img src={fullscreenIcon} alt="" onClick={toggleFullscrean} className={styles.smallIcon} />
                  ) : (
                    <img src={exitFullscreenIcon} alt="" onClick={toggleFullscrean} className={styles.smallIcon} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <PlayerDescription/> 
      </div>
        
    <VideoCards title={'Related videos'}/>
    
    </div>
  )
}