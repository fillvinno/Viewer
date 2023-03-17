import React from 'react'
import styles from './MenuItem.module.css'
import {Link} from "react-router-dom"

export default function MenuItem({icon, title, link}) {
  return (
    <Link to={link} className={styles.menuItem}>
          <span className={icon}></span>
          <p>{title}</p>
    </Link>
  )
}
