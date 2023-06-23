import React, { useState, useEffect } from 'react'
import styles from './PlayerDescription.module.css'
import {Link} from 'react-router-dom'
import ava from '../../img/channelAvatar.png'
import AddToPlaylistModal from '../AddToPlaylistModal/AddToPlaylistModal'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PlaylistService from '../../services/PlaylistService'
import VideoService from '../../services/VideoService'
import ChannelService from '../../services/ChannelService'
import Comments from '../Comments/Comments'
import CommentsList from '../CommentsList/CommentsList'
import { saveAs } from 'file-saver'

export default function PlayerDescription({videoInfo}) {
  const params = useParams()
  const user = useSelector(state => state.auth.user)
  const [modalActive, setModalActive] = useState(false)
  const [isVideoLiked, setIsVideoLiked] = useState(false)
  const [likes, setLikes] = useState()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [comments, setComments] = useState([])
  const [btnClick, setBtnClick] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {   
          const response = await VideoService.isVideoLiked(params.id, user?.channelId)
          setIsVideoLiked(response?.data)
          const video = await VideoService.getVideoById(params.id)
          setLikes(video?.data?.likesCounter)
          const channel = await ChannelService.isSubscribed(user?.channelId, videoInfo?.channelId)
          setIsSubscribed(channel?.data)
      } catch (e) {
        console.log(e?.message)
      }
    }
    fetchData()
  }, [params.id, isVideoLiked, isSubscribed, user])

  const likeVideo = async () => {
    try {
      await VideoService.likeVideo(params.id, user?.channelId)
      setLikes(likes => likes + 1)
      setIsVideoLiked(true)
    } catch (e) {
      console.log(e?.message?.error)
    }
  }

  const unlikeVideo = async () => {
    try {
      await VideoService.unLikeVideo(params.id, user?.channelId)
      setLikes(likes => likes - 1)
      setIsVideoLiked(false)
    } catch (e) {
      console.log(e?.message?.error)
    }
  }

  const subscribe = async () => {
    try {
      setIsSubscribed(true)
      await ChannelService.subscribe(user?.channelId, videoInfo?.channelId)
    } catch (e) {
      console.log(e?.message)
    }
  }
  const unSubscribe = async () => {
    try {
      setIsSubscribed(false)
      await ChannelService.unSubscribe(user?.channelId, videoInfo?.channelId)
    } catch (e) {
      console.log(e?.message)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {   
          const response = await VideoService.getVideoComments(params.id)
          setComments(response?.data)
      } catch (e) {
        console.log(e?.message)
      }
    }
    fetchData()
  }, [params.id, btnClick])

  const url = window.location.href

  const downloadFile = async (path) => {

    const response = await VideoService.download(path)
  }

  return (
    <div className={styles.wrap}>
      <AddToPlaylistModal active={modalActive} setActive={setModalActive}/>
      <div className={styles.videoInfoWrap}>
        <h1 className={styles.title}>
          {videoInfo && videoInfo?.title}
        </h1>
        <div className={styles.info}>
            <span className={styles.views}>{videoInfo && videoInfo?.views} просмотров</span>
            {/* <span className={styles.timeAgo}>2 hours ago</span> */}
        </div>
        <div className={styles.videoBtns}>
            <div className={styles.leftSideBtns}>
              <Link to={`/channel/${videoInfo?.channelId}/featured`}><img src={ava} className={styles.channelPhoto}/></Link>
              <Link className={styles.channelName} to={`/channel/${videoInfo?.channelId}/featured`}>{videoInfo && videoInfo?.channelName}</Link>
              {user?.channelId == videoInfo?.channelId ? null : <button className={`${styles.followBtn} ${isSubscribed ? styles.followBtnSubscribed : styles.followbtnUnsubscribed}`} onClick={isSubscribed ? unSubscribe : subscribe}>{isSubscribed ? 'Вы подписаны' : 'Подписаться'}</button>}
            </div>
            <div className={styles.rightSideBtns}>
              <Link className={styles.downloadBtn} to={`http://localhost:5000/api/download/${videoInfo?.videoPath}`}>Скачать</Link>
              {/* <a href={`http://localhost:5000/api/download/${videoInfo?.videoPath}`} download>Скачать</a> */}
              <button className={`${styles.likeBtn} ${styles.btns} ${isVideoLiked ? styles.btnLiked : null}`} onClick={isVideoLiked ? unlikeVideo : likeVideo}>
                <span className='icon-like'></span>
                {likes}
              </button>
              <button className={`${styles.playlistBtn} ${styles.btns}`} onClick={() => setModalActive(true)}>
                <span className='icon-saved'></span>
              </button>
              <button className={`${styles.shareBtn} ${styles.btns}`} onClick={() => {navigator.clipboard.writeText(url)}}>
                <span className='icon-share'></span>
              </button>
            </div>
        </div>
        <hr className={styles.underline}/>
        <div className={styles.description}>
          {videoInfo && videoInfo?.description}
        </div>
        <hr className={styles.underline}/>
        <div className={styles.commentsSection}>
          <h2 className={styles.heading}>Комментарии</h2>
          <Comments videoId={videoInfo?.id} channelId={user?.channelId} channelName={user?.nickname} btnClick={btnClick} setBtnClick={setBtnClick}/>
          <CommentsList comments={comments}/>
        </div>
      </div>  
    </div>
  )
}
