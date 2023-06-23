import React from 'react' 
import styles from './AddVideoBtn.module.css'
import { Link } from 'react-router-dom'

let iconStyles = { color: "#fff", fontSize: "24px" };

export default function AddVideoBtn() {
  return (
    <Link to='/create' className={styles.addVideoBtn}>
        <span className='icon-addVideoBtn' style={iconStyles}/>
        <span className={styles.text}>Добавить</span>
    </Link>
  )
}
