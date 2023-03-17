import React from 'react'
import styles from './Notifications.module.css'

export default function Notifications() {
  return (
    <div className={styles.notification}>
        <span className='icon-notice' style={{fontSize: '24px'}}>
            <span className="path1"></span>
            <span className="path2"></span>
        </span>
        <div className={styles.notificatonsCounter}>
            <span>5</span>
        </div>
    </div>
  )
}
