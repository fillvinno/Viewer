import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout.jsx'
import Player from '../../components/Player/Player.jsx'
import { useParams } from 'react-router-dom'
import VideoService from '../../services/VideoService'

export default function VideoPlayer() {
  const [video, setVideo] = useState()

  const params = useParams()
  // загрузка видео с сервера
  useEffect(() => {
    async function fetchData() {
      const responce = await VideoService.getVideoById(params.id)
      setVideo(responce?.data)
    }
    fetchData()
  }, [params?.id])

  return (
    <Layout>
      <Player video={video}/>
    </Layout>
  )
}