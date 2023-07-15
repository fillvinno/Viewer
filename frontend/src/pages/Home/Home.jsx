import React, { useEffect, useState } from 'react'
import VideoCards from '../../components/VideoCards/VideoCards'
import Layout from '../../components/Layout/Layout'
import VideoService from '../../services/VideoService'
import { SpinnerLoader } from '../../components/SpinnerLoader/SpinnerLoader'

export default function Home() { 
  const [isLoading, setLoading] = useState(true)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const videos = await VideoService.getAmountVideos(18)
      setVideos(videos)
      setLoading(false)
    }
    fetchData()
  }, [])
  
  return (
    isLoading 
    ? <SpinnerLoader/>
    : <Layout>
        <VideoCards title={'Видео'} videos={videos?.data}/>
        <VideoCards title={'Популярное'} videos={videos?.data} type={'popular'}/>
      </Layout>
    )
}
