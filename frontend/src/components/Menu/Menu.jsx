import React from 'react'
import styles from './Menu.module.css'
import MenuItem from '../MenuItem/MenuItem'

export default function Menu({title, list}) {
  return (
   <div className={styles.menu}>
        <p className={styles.title}>{title}</p>
        <div className={styles.menuItems}>
            {list.map(el => (
                <MenuItem icon={el.icon} title={el.title} key={el.title} link={el.link}/>
            ))}
        </div>
   </div>
  )
}
