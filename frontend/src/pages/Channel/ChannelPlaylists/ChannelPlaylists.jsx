import React from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import PlaylistsList from '../../../components/PlaylistsList/PlaylistsList'
import styles from './ChannelPlaylists.module.css'

export default function ChannelPlaylists() {
  return (
    <ChannelLayout>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>Playlists</h2>
        <div className={styles.playlists}>
          <PlaylistsList/>
        </div>
      </div>
    </ChannelLayout>
  )
}
