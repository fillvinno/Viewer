import React from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import VideoCards from '../../../components/VideoCards/VideoCards'
import styles from './ChannelFeatured.module.css'

export default function ChannelFeatured() {
  return (
    <ChannelLayout>
        <div className={styles.featuredWrap}>
            <VideoCards title={'Featured'}/>
        </div>
    </ChannelLayout>
  )
}
