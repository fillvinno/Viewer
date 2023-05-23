import React, { useCallback } from 'react'
import styles from './ChannelLayout.module.css'
import Layout from '../../components/Layout/Layout'
import avatar from '../../img/avatar.png'
import settingsIcon from '../../img/settings-icon.svg'
import { Link, NavLink } from 'react-router-dom'

export default function ChannelLayout({children}) {
  return (
    <Layout>
        <div className={styles.channelInfoWrapper}>
            <div className={styles.infoSection}>
                <div className={styles.avatarWrapper}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.innerSectionWrapper}>
                    <div className={styles.nickname}>Lorem</div>
                    <div className={styles.channelInfo}>
                        <span className={styles.subsribersCount}>99999 подписчиков</span>
                        <span className={styles.videosCount}>Нет видео</span>
                    </div>
                </div>
            </div>
            
            <div className={styles.btnsSectionWrapper}>
                <Link>
                    <img src={settingsIcon} alt="settings" />
                </Link>
            </div>
        </div>
        <div className={styles.channelNavigation}>
            <ul className={styles.navigationList}>
                <li className={styles.navigationItems}>
                    <NavLink to='/channel/featured' className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>Главная</NavLink>
                </li>
                <li className={styles.navigationItems}>
                    <NavLink to='/channel/playlists' className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>Плейлисты</NavLink>
                </li>
                <li className={styles.navigationItems}>
                    <NavLink to='/channel/channels' className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>Каналы</NavLink>
                </li>
                <li className={styles.navigationItems}>
                    <NavLink to='/channel/about' className={useCallback(({isActive}) => isActive ? styles.activeLink : styles.linkDefault, [])}>О канале</NavLink>
                </li>
            </ul>
        </div>
        <div className={styles.channelPagesWrap}>
            {children}
        </div>
    </Layout>
  )
}
