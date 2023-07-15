import React, { useEffect, useState } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import PlaylistsList from '../../../components/PlaylistsList/PlaylistsList'
import styles from './ChannelPlaylists.module.css'
import ChannelService from '../../../services/ChannelService'
import PlaylistService from '../../../services/PlaylistService'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SpinnerLoader } from '../../../components/SpinnerLoader/SpinnerLoader'

export default function ChannelPlaylists() {
  const params = useParams()
  const user = useSelector(state => state.auth.user)

  const [channel, setChannel] = useState({})
  const [playlists, setPlaylists] = useState([])
  const [isSubscribed, setIsSubscribed] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
        // проверка подписки на канал
        const responseIsSubscribed = await ChannelService.isSubscribed(user?.channelId, params.id)
        setIsSubscribed(responseIsSubscribed?.data)
        // получение обьекта канала
        const responseGetChannel = await ChannelService.getChannelById(params.id)
        setChannel(responseGetChannel?.data)
        // получение плейлистов
        const responseGetPlaylists = await PlaylistService.getAmountChannelPlaylists(40, params.id)
        setPlaylists(responseGetPlaylists?.data)
      setLoading(false)
    }
    fetchData()
  }, [params.id])

  return (
    loading 
    ? <SpinnerLoader/> 
    : <ChannelLayout channel={channel} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}>
        <div className={styles.wrap}>
          <h2 className={styles.heading}>Плейлисты</h2>
          <div className={styles.playlists}>
            <PlaylistsList playlists={playlists?.data}/>
          </div>
        </div>
      </ChannelLayout>
  )
}
