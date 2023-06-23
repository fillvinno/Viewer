import React from 'react'
import styles from './ChannelsList.module.css'
import ChannelsListItem from '../ChannelsListItem/ChannelsListItem'

export default function ChannelsList({channels}) {
  return (
    <div className={styles.wrap}>
        {
          channels.map(channel => (
            <ChannelsListItem key={channel.id} channel={channel}/>
          ))
        }
    </div>
  )
}
