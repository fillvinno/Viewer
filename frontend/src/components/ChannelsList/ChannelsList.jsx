import React from 'react'
import styles from './ChannelsList.module.css'
import ChannelsListItem from '../ChannelsListItem/ChannelsListItem'

export default function ChannelsList() {
  return (
    <div className={styles.wrap}>
        <ChannelsListItem/>
        <ChannelsListItem/>
        <ChannelsListItem/>
        <ChannelsListItem/>
        <ChannelsListItem/>
        <ChannelsListItem/>
    </div>
  )
}
