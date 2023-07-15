import React, { useEffect, useState } from 'react'
import styles from './ChannelsListItem.module.css'
import avatar from '../../img/avatar.png'
import { Link, useParams } from 'react-router-dom'
import ChannelService from '../../services/ChannelService'
import { useSelector } from 'react-redux'
import { SpinnerLoader } from '../SpinnerLoader/SpinnerLoader'

export default function ChannelsListItem({channel}) {
  const user = useSelector(state => state.auth.user)
  const params = useParams()
  const [isSubscribed, setIsSubscribed] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      async function fetchData() {
        if (!channel) return 
        setLoading(true)
          const response = await ChannelService.isSubscribed(user?.channelId, channel?.id)
          setIsSubscribed(response?.data)
        setLoading(false)
        console.log(isSubscribed)
      }
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }, [])

  const subscribe = async () => {
    try {
      setIsSubscribed(true)
      await ChannelService.subscribe(user?.channelId, channel?.id)
    } catch (e) {
      console.log(e?.message)
    }
  }
  const unSubscribe = async () => {
    try {
      setIsSubscribed(false)
      await ChannelService.unSubscribe(user?.channelId, channel?.id)
    } catch (e) {
      console.log(e?.message)
    }
  }

  return (
    loading
    ? <SpinnerLoader/>
    : <div className={styles.channelWrap}>
        <Link to={`/channel/${channel?.id}/featured`}>
            <div className={styles.avatarWrap}>
                <img src={avatar} alt="avatar" className={styles.avatar}/>
            </div>
            <p className={styles.channelName}>{ channel?.name }</p>
            <p className={styles.subscribersCount}>{ channel?.followers } подписчик</p>
        </Link>
        <button className={`${styles.subscribeBtn} ${isSubscribed ? styles.followBtnSubscribed : styles.followbtnUnsubscribed}`} onClick={isSubscribed ? unSubscribe : subscribe}>{isSubscribed ? 'Вы подписаны' : 'Подписаться'}</button>
      </div>
  )
}
