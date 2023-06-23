import React, { useEffect, useState } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import PlaylistsList from '../../../components/PlaylistsList/PlaylistsList'
import styles from './ChannelPlaylists.module.css'
import ChannelService from '../../../services/ChannelService'
import PlaylistService from '../../../services/PlaylistService'
import { useParams } from 'react-router-dom'

export default function ChannelPlaylists() {
  const params = useParams()
  const [channel, setChannel] = useState({})
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    async function fetchData() {
      const respone = await ChannelService.getChannelById(params.id)
      setChannel(respone?.data)
    }
    fetchData()
  }, [params.id])

  useEffect(() => {
    async function fetchData() {
      const respone = await PlaylistService.getAmountChannelPlaylists(40, params.id)
      setPlaylists(respone)
    }
    fetchData()
  }, [params.id])
  console.log(playlists)
  return (
    <ChannelLayout channel={channel}>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>Плейлисты</h2>
        <div className={styles.playlists}>
          <PlaylistsList playlists={playlists?.data}/>
        </div>
      </div>
    </ChannelLayout>
  )
}
