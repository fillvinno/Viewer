import React, { useEffect, useState } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import ChannelsList from '../../../components/ChannelsList/ChannelsList'
import styles from './ChannelChannels.module.css'
import ChannelService from '../../../services/ChannelService'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SpinnerLoader } from '../../../components/SpinnerLoader/SpinnerLoader'

export default function ChannelChannels() {
  const params = useParams()
  const user = useSelector(state => state.auth.user)

  const [isSubscribed, setIsSubscribed] = useState()
  const [channel, setChannel] = useState({})
  const [channels, setChannels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
          // получение подписок
          const responseSubscribes = await ChannelService.getSubscribes(params.id)
          // получение канала
          const responseChannel = await ChannelService.getChannelById(params.id)
          // проверка подписки
          const responseIsSubscribed = await ChannelService.isSubscribed(user?.channelId, params.id)
          console.log('-> subscribes', responseSubscribes?.data)
          console.log('-> channel', responseChannel?.data)
          console.log('-> isSubscribed', responseIsSubscribed?.data)
          setChannel(responseChannel?.data)
          setChannels(responseSubscribes?.data)
          setIsSubscribed(responseIsSubscribed?.data)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [params.id])

  return (
    loading 
    ? <SpinnerLoader/> 
    : <ChannelLayout channel={channel} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}>
        <div className={styles.channelsWrap}>
          <h2 className={styles.heading}>Подписки</h2>    
          <ChannelsList channels={channels} setLoading={setLoading}/>
        </div>
      </ChannelLayout>
  )
}
