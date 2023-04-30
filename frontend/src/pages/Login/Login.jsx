import React, { useState, useEffect } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/logo.svg'
import AuthService from '../../services/AuthService'
import { setUser, setAuth } from '../../store/slices/authSlice' 
import { useDispatch } from 'react-redux'

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     navigate('/home')
  //   }
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await AuthService.login(email, password)
      console.log(response);

      if(response.data) {
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
        <input type="text" autoComplete='new-password' className={styles.input} placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email}/>
        <input type="password" autoComplete='new-password' className={styles.input} placeholder='Пароль' onChange={e => setPassword(e.target.value)} value={password}/>
        <button className={styles.button} type='submit'>Войти</button>
        <Link className={styles.registration} to='/registration'>Создать аккаунт</Link>
      </form>
    </div>
  )
}