import React, { useState, useEffect } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import VideoCards from '../../../components/VideoCards/VideoCards'
import styles from './ChannelFeatured.module.css'
import { useParams } from 'react-router-dom'
import ChannelService from '../../../services/ChannelService'
import VideoService from '../../../services/VideoService'
import { SpinnerLoader } from '../../../components/SpinnerLoader/SpinnerLoader'
import { useSelector } from 'react-redux'

export default function ChannelFeatured() {
  const params = useParams()
  const user = useSelector(state => state.auth.user)

  const [isLoading, setLoading] = useState(true)
  const [channel, setChannel] = useState({})
  const [videos, setVideos] = useState([])
  const [isSubscribed, setIsSubscribed] = useState()
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
        // проверка подписки на канал
        const responseIsSubscribed = await ChannelService.isSubscribed(user?.channelId, params.id)
        setIsSubscribed(responseIsSubscribed?.data)
        // получение канала с сервера
        const responseChannel = await ChannelService.getChannelById(params.id)
        setChannel(responseChannel?.data)
        // получение видео канала с сервера
        const responseVideos = await VideoService.getAmountChannelVideos(40, params.id)
        setVideos(responseVideos?.data)
      setLoading(false)
    }
    fetchData()
  }, [params.id])
  return (
    isLoading
    ? <SpinnerLoader/>
    : <ChannelLayout channel={channel} setLoading={setLoading} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}>
        <div className={styles.featuredWrap}>
            <VideoCards title={'Видео канала'} videos={videos} type={'channelRelated'}/>
        </div>
      </ChannelLayout>
  )
}
