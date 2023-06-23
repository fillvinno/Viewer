import React, { useEffect, useState } from 'react'
import VideoCards from '../../components/VideoCards/VideoCards'
import Layout from '../../components/Layout/Layout'
import VideoService from '../../services/VideoService'

export default function Home() { 

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const videos = await VideoService.getAmountVideos(18)
      setVideos(videos)
    }
    fetchData()
  }, [])
  
  return (
    <Layout>
      <VideoCards title={'Видео'} videos={videos?.data}/>
      <VideoCards title={'Популярное'} videos={videos?.data} type={'popular'}/>
    </Layout>
  )
}
