import React, { useEffect, useState } from 'react'
import styles from './Registration.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/logo.svg'
import AuthService from '../../services/AuthService'
import { setUser, setAuth } from '../../store/slices/authSlice' 
import { useDispatch } from 'react-redux'

export default function Registration() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     navigate('/home')
  //   }
  // }, [])

  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await AuthService.registration(email, nickname, password)
      console.log(response);

      if (response.data) {
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setUser(response.data))
        dispatch(setAuth(true))
        // редирект в приложение
        navigate('/home')
      }
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width='24px'/>
          <span>Viewer</span>
        </div>
        <input type="text" autoComplete='new-password' className={styles.input} placeholder='Логин' onChange={e => setNickname(e.target.value)} value={nickname}/>
        <input type="email" autoComplete='new-password' className={styles.input} placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email}/>
        <input type="password" autoComplete='new-password' className={styles.input} placeholder='Пароль' onChange={e => setPassword(e.target.value)} value={password}/>
        <input type="password" autoComplete='new-password' className={styles.input} placeholder='Подтвердите пароль' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        <button className={styles.button}>Зарегестрироваться</button>
        <Link className={styles.login} to='/login'>Уже есть аккаунт?</Link>
      </form>
    </div>
  )
}