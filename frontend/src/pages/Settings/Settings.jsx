import React, { useState } from 'react'
import styles from './Settings.module.css'
import Layout from '../../components/Layout/Layout'
import { useSelector } from 'react-redux'
import UserService from '../../services/UserService'

export default function Settings() {
    const user = useSelector(state => state.auth.user)
    const [isSended, setIsSent] = useState(false)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await UserService.sendDeleteMessage(user.id, user.channelId)
            setIsSent(true)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <h2 className={styles.heading}>Настройки</h2>
            <div className={styles.deleteAccount}>
                <h3>Удалить аккаунт</h3>
                <button className={styles.deleteAccountBtn} onClick={handleSubmit}>Отправить письмо</button>
                {isSended ? <p className={styles.sendMail}>Письмо отправлено</p> : null}
            </div>
        </Layout>
  )
}