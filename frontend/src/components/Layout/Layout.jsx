import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'
import { useSelector } from 'react-redux'


function Layout({children}) {
  const user = useSelector(state => state.auth.user)
  return (
    <div className={styles.layout}>
        <Sidebar user={user}/>
        <Header user={user}/>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {children}
          </div>
        </div>       
    </div>
  )
}

export default React.memo(Layout)