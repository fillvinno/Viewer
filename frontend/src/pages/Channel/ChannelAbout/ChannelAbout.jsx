import React, { useEffect, useState } from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import styles from './ChannelAbout.module.css'
import { useParams } from 'react-router-dom'
import ChannelService from '../../../services/ChannelService'

export default function ChannelAbout() {
  const params = useParams()

  const [channel, setChannel] = useState({})
  useEffect(() => {
    async function fetchData() {
      const respone = await ChannelService.getChannelById(params.id)
      setChannel(respone?.data)
    }
    fetchData()
  }, [params.id])

  let date = new Date(channel?.createDate)
  let formattedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
  console.log(formattedDate)
  return (
    <ChannelLayout channel={channel}>
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
