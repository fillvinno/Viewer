import React, { useState } from 'react'
import styles from './Registration.module.css'
import logo from '../../img/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import { setUser, setAuth } from '../../store/slices/authSlice' 
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'

const validate = values => {
  const errors = {}

  if (!values.nickname) {
    errors.nickname = 'Обязательное поле'
  } else if (values.nickname.length > 32) {
    errors.nickname = 'Слишком длинный логин'
  }  
  if (!values.email) {
    errors.email = 'Обязательное поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректная почта'
  } else if (values.email.length > 128) {
    errors.email = 'Слишком длинная почта'
  }
  if (!values.password) {
    errors.password = 'Обязательное поле'
  } else if (values.password.length < 4) {
    errors.password = 'Пароль слишком короткий'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Обязательное поле'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Пароли должны совпадать'
  }

  return errors
}

export default function Registration() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [serverError, setServerError] = useState('')

  return (
    <div className={styles.wrap}>
      <Formik
        initialValues={{
          nickname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validate = { validate }
        onSubmit = { async (values) => {
          try {
            const response = await AuthService.registration(values.email, values.nickname, values.password)
            console.log(response);
      
            if (response.data) {
              localStorage.setItem('token', response.data.accessToken)
              dispatch(setAuth(true))
              dispatch(setUser(response.data.user))
              // редирект в приложение
              navigate('/home')
            }
          } catch (e) {
            console.log(e?.response?.data?.message)
            setServerError(`${e?.response?.data?.message}`)
          }
        }
      }
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" width='24px'/>
              <span>Viewer</span>
            </div>
            {touched.nickname && errors.nickname ? (<div className={styles.errors}>{errors.nickname}</div>) : null}
            <Field 
              id='nickname'
              name='nickname'
              type="text" 
              autoComplete='new-password' 
              className={styles.input} 
              placeholder='Логин' 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.nickname}
            />
            {touched.email && errors.email ? (<div className={styles.errors}>{errors.email}</div>) : null}
            <Field 
              id='email'
              name='email'
              type="email" 
              autoComplete='new-password' 
              className={styles.input} 
              placeholder='E-mail' 
              onChange={handleChange}
              onBlur={handleBlur} 
              value={values.email}
            />
            {touched.password && errors.password ? (<div className={styles.errors}>{errors.password}</div>) : null}
            <Field 
              id='password'
              name='password'
              type="password" 
              autoComplete='new-password' 
              className={styles.input} 
              placeholder='Пароль' 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.password}
            />
            {touched.confirmPassword && errors.confirmPassword ? (<div className={styles.errors}>{errors.confirmPassword}</div>) : null}
            <Field 
              id='confirmPassword'
              name='confirmPassword'
              type="password" 
              autoComplete='new-password' 
              className={styles.input} 
              placeholder='Подтвердите пароль' 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.confirmPassword}
            />
            { serverError ? (<div className={styles.errors}>{serverError}</div>) : null }
            <button className={styles.button} type='submit'>Зарегестрироваться</button>
            <Link className={styles.login} to='/login'>Уже есть аккаунт?</Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}