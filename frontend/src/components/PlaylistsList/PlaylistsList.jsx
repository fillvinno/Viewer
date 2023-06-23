import React from 'react'
import PlaylistListItem from '../PlaylistListItem/PlaylistListItem'
import styles from './PlaylistsList.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddToPlaylistBtn from '../AddToPlaylistBtn/AddToPlaylistBtn'

export default function PlaylistsList({playlists}) {
  const params = useParams()
  const user = useSelector(state => state.auth.user)
  console.log(user)
  return (
    <div className={styles.playlistsWrapper}>
      {
        params.id == user?.channelId ? <AddToPlaylistBtn/> : null
      }
      {
        playlists && playlists.map(el => <PlaylistListItem key={el.id} playlist={el}/>)
      }
    </div>
  )
}