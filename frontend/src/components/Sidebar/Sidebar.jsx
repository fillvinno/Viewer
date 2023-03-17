import React from 'react'
import styles from './Sidebar.module.css'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

const menu = [
  {title: 'Home', icon: 'icon-home', link: '/home'}, 
  {title: 'Trending', icon: 'icon-trending', link: '/trending'},
  {title: 'Following', icon: 'icon-following', link: '/following'}
]

const library = [
  {title: 'Recent', icon: 'icon-recent', link: '/recent' }, 
  {title: 'Favourites', icon: 'icon-favourites', link: '/favourites'},
  {title: 'Saved', icon: 'icon-saved', link: '/saved'},
  {title: 'Your videos', icon: 'icon-yourvideos', link: '/yourvideos'},
]

const following = [

]

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <Menu title='menu' list={menu}/>
        <Menu title='library' list={library}/>
        <Menu title='following' list={following}/>
    </div>
  )
}
