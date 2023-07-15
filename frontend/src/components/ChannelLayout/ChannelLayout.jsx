import React, { useCallback, useState, useEffect } from 'react'
import styles from './ChannelLayout.module.css'
import Layout from '../../components/Layout/Layout'
import avatar from '../../img/avatar.png'
import settingsIcon from '../../img/settings-icon.svg'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ChannelService from '../../services/ChannelService'

export default function ChannelLayout({children, channel, setIsSubscribed, isSubscribed}) {
    const params = useParams()
    const user = useSelector(state => state.auth.user)
    console.log(isSubscribed)
    
    const subscribe = async () => {
        try {
            setIsSubscribed(true)
            await ChannelService.subscribe(user?.channelId, params.id)
        } catch (e) {
            console.log(e?.message)
        }
    }
    const unSubscribe = async () => {
        try {
            setIsSubscribed(false)
            await ChannelService.unSubscribe(user?.channelId, params.id)
        } catch (e) {
            console.log(e?.message)
        }
    }

    return (
        <Layout>
            <div className={styles.channelInfoWrapper}>
                <div className={styles.infoSection}>
                    <div className={styles.avatarWrapper}>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className={styles.innerSectionWrapper}>
                        <div className={styles.nickname}>{ channel?.name }</div>
                        <div className={styles.channelInfo}>
                            <span className={styles.subsribersCount}>{ channel?.followers } подписчиков</span>
                            {/* <span className={styles.videosCount}>Нет видео</span> */}
                        </div>
                    </div>
                </div>
                {
                    // вывод кнопки, в зависимости от того свой это канал или чужой
                    user?.channelId == params.id 
                    ? 
                        <div className={styles.btnsSectionWrapper}>
                            <Link to='/settings'>
                                <img src={settingsIcon} alt="settings" />
                            </Link>
                        </div>
                    : 
                        <button 
                            className={`${styles.subscribeBtn} ${isSubscribed ? styles.followBtnSubscribed : styles.followbtnUnsubscribed}`} 
                            onClick={isSubscribed ? unSubscribe : subscribe}
                        >
                            {isSubscribed ? 'Вы подписаны' : 'Подписаться'}
                        </button>
                }
                
            </div>
            <div className={styles.channelNavigation}>
                <ul className={styles.navigationList}>
                    <li className={styles.navigationItems}>
                        <NavLink to={`/channel/${channel?.id}/featured`} className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>Главная</NavLink>
                    </li>
                    <li className={styles.navigationItems}>
                        <NavLink to={`/channel/${channel?.id}/playlists`} className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>Плейлисты</NavLink>
                    </li>
                    <li className={styles.navigationItems}>
                        <NavLink to={`/channel/${channel?.id}/channels`} className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>Каналы</NavLink>
                    </li>
                    <li className={styles.navigationItems}>
                        <NavLink to={`/channel/${channel?.id}/about`} className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>О канале</NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.channelPagesWrap}>
                {children}
            </div>
        </Layout>
    )
}
