import React from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import ChannelsList from '../../../components/ChannelsList/ChannelsList'
import styles from './ChannelChannels.module.css'

export default function ChannelChannels() {
  return (
    <ChannelLayout>
        <div className={styles.channelsWrap}>
          <h2 className={styles.heading}>Channels</h2>    
          <ChannelsList/>
        </div>
    </ChannelLayout>
  )
}
