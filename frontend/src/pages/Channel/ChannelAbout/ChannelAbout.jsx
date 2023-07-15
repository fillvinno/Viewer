import React, { useEffect, useState } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import styles from './ChannelAbout.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ChannelService from '../../../services/ChannelService'
import { SpinnerLoader } from '../../../components/SpinnerLoader/SpinnerLoader'

export default function ChannelAbout() {
  const params = useParams()
  const user = useSelector(state => state.auth.user)

  const [channel, setChannel] = useState({})
  const [isSubscribed, setIsSubscribed] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
        // проверка подписки на канал
        const responseIsSubscribed = await ChannelService.isSubscribed(user?.channelId, params.id)
        setIsSubscribed(responseIsSubscribed?.data)
        // получение канала
        const responseChannel = await ChannelService.getChannelById(params.id)
        setChannel(responseChannel?.data)
      setLoading(false)
    }
    fetchData()
  }, [params.id])

  let date = new Date(channel?.createDate)
  let formattedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
  console.log(formattedDate)
  
  return (
    loading
    ? <SpinnerLoader/>
    : <ChannelLayout channel={channel} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}>
        {console.log(channel)}
          <div className={styles.wrap}>
            <h2 className={styles.heading}>О канале</h2>
            <div className={styles.contentWrap}>
              <div className={styles.infoWrap}>
                <div className={styles.descriptionWrap}>
                  <p className={styles.descriptionHeading}>Описание</p>
                  <p className={styles.description}>
                    {channel?.description}
                  </p>
                </div>
                <div className={styles.statisticsWrap}>
                  <div className={styles.statisticsItem}>
                    <p className="statisticsHeading">Статистика</p>
                  </div>
                  <div className={styles.statisticsItem}>
                    <p className="registrationDate">{formattedDate}</p>
                  </div>
                  <div className={styles.statisticsItem}>
                    <p className="viewsCount">{channel?.views} просмотров</p>
                  </div>
                </div>
            </div>
              
            </div>
          </div>
      </ChannelLayout>
  )
}
