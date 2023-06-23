import React from 'react'
import styles from './AddToPlaylistBtn.module.css'
import { Link } from 'react-router-dom'
import plusIcon from '../../img/plus-icon.svg'

export default function AddToPlaylistBtn() {
  return (
    <Link to='/create-playlist' className={styles.wrap}>
        <div className={styles.circle}>
            <img src={plusIcon} alt="plus" className={styles.plusIcon}/>
        </div>
    </Link>
  )
}
