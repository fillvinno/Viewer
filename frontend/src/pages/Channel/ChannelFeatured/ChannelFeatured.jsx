import React, { useState, useEffect } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import VideoCards from '../../../components/VideoCards/VideoCards'
import styles from './ChannelFeatured.module.css'
import { useParams } from 'react-router-dom'
import ChannelService from '../../../services/ChannelService'
import VideoService from '../../../services/VideoService'

export default function ChannelFeatured() {
  const params = useParams()

  const [channel, setChannel] = useState({})
  const [videos, setVideos] = useState([])
  // получение канала с сервера
  useEffect(() => {
    async function fetchData() {
      const respone = await ChannelService.getChannelById(params.id)
      setChannel(respone?.data)
    }
    fetchData()
  }, [params.id])
  // получение видео канала с сервера
  useEffect(() => {
    async function fetchData() {
      const respone = await VideoService.getAmountChannelVideos(40, params.id)
      setVideos(respone?.data)
    }
    fetchData()
  }, [])
  console.log(videos)
  return (
    <ChannelLayout channel={channel}>
        <div className={styles.featuredWrap}>
            <VideoCards title={'Видео канала'} videos={videos} type={'channelRelated'}/>
        </div>
    </ChannelLayout>
  )
}
