import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'


function Layout({children}) {
  return (
    <div className={styles.layout}>
        <Sidebar/>
        <div className={styles.contentWrapper}>
          <Header/>
          <div className={styles.content}>
            {children}
          </div>
        </div>       
    </div>
  )
}

export default React.memo(Layout)