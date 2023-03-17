import React from 'react'
import VideoCards from '../../components/VideoCards/VideoCards'
import Layout from '../../components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <VideoCards title={'Trending'}/>
      <VideoCards title={'For you'}/>
    </Layout>
  )
}
