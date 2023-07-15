import React from 'react'
import styles from './Sidebar.module.css'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

export default function Sidebar({user}) {
  const menu = [
    {title: 'Главная', icon: 'icon-home', link: '/home'}, 
    {title: 'Популярное', icon: 'icon-trending', link: '/home#trending'},
    // {title: 'Подписки', icon: 'icon-following', link: `/channel/${user?.channelId}/channels`}
  ]
  
  const library = [
    // {title: 'Понравившееся', icon: 'icon-favourites', link: '/favourites'},
    {title: 'Плейлисты', icon: 'icon-saved', link: `/channel/${user?.channelId}/playlists`},
    {title: 'Ваши видео', icon: 'icon-yourvideos', link: `/channel/${user?.channelId}/featured`},
  ]
  
  const following = [
    
  ]

  return (
    <div className={styles.sidebar}>
        <Logo/>
        <Menu title='меню' list={menu}/>
        <Menu title='библиотека' list={library}/>
        {/* <Menu title='подписки' list={following}/> */}
    </div>
  )
}
