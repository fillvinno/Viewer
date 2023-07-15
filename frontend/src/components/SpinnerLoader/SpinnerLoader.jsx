import React from 'react'
import styles from './SpinnerLoader.module.css'
import spinner from '../../img/spinner.png'

export const SpinnerLoader = () => {
  return (
    <div className={styles.wrap}>
        <img src={spinner} alt="loader" className={styles.spinnerImg}/>
    </div>
  )
}
