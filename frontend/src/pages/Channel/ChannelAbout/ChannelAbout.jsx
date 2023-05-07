import React from 'react'
import ChannelLayout from '../../../components/ChannelLayout/ChannelLayout'
import styles from './ChannelAbout.module.css'

export default function ChannelAbout() {
  return (
    <ChannelLayout>
        <div className={styles.wrap}>
          <h2 className={styles.heading}>About</h2>
          <div className={styles.contentWrap}>
            <div className={styles.infoWrap}>
              <div className={styles.descriptionWrap}>
                <p className={styles.descriptionHeading}>Описание</p>
                <p className={styles.description}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia similique, 
                  unde veritatis amet harum fugit possimus minima ad deleniti aperiam commodi 
                  rerum corporis assumenda iure sequi, itaque cupiditate ipsum voluptates?
                </p>
              </div>
              <div className={styles.statisticsWrap}>
                <div className={styles.statisticsItem}>
                  <p className="statisticsHeading">Статистика</p>
                </div>
                <div className={styles.statisticsItem}>
                  <p className="registrationDate">Дата регистрации: 30 дек. 2021 г.</p>
                </div>
                <div className={styles.statisticsItem}>
                  <p className="viewsCount">99 999 просмотров</p>
                </div>
              </div>
          </div>
            
          </div>
        </div>
    </ChannelLayout>
  )
}
