import React, { useEffect, useState } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import ChannelsList from '../../../components/ChannelsList/ChannelsList'
import styles from './ChannelChannels.module.css'
import ChannelService from '../../../services/ChannelService'
import { useParams } from 'react-router-dom'

export default function ChannelChannels() {
  const params = useParams()
  const [channel, setChannel] = useState({})
  const [channels, setChannels] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await ChannelService.getChannelById(params.id)
        setChannel(respone?.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [params.id])

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await ChannelService.getSubscribes(params.id)
        console.log(respone?.data)
        setChannels(respone?.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [params.id])
  console.log(channels)
  return (
    <ChannelLayout channel={channel}>
        <div className={styles.channelsWrap}>
          <h2 className={styles.heading}>Подписки</h2>    
          <ChannelsList channels={channels}/>
        </div>
    </ChannelLayout>
  )
}
