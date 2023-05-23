import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/logo.svg'
import AuthService from '../../services/AuthService'
import { setUser, setAuth } from '../../store/slices/authSlice' 
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'

const validate = values => {
  const errors = {}
 
  if (!values.email) {
    errors.email = 'Обязательное поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректная почта'
  }
  if (!values.password) {
    errors.password = 'Обязательное поле'
  }

  return errors
}

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [serverError, setServerError] = useState('')

  return (
    <div className={styles.wrap}>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate = { validate }
        onSubmit={ async (values) => {
          try {
            const response = await AuthService.login(values.email, values.password)
            console.log(response);
      
            if(response.data) {
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
          { touched.email && errors.email ? (<div className={styles.errors}>{errors.email}</div>) : null }
          <Field 
            type="text" 
            name='email'
            autoComplete='new-password' 
            className={styles.input} 
            placeholder='E-mail' 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          { touched.password && errors.password ? (<div className={styles.errors}>{errors.password}</div>) : null }
          <Field 
            type="password" 
            name='password'
            autoComplete='new-password' 
            className={styles.input} 
            placeholder='Пароль' 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          { serverError ? (<div className={styles.errors}>{serverError}</div>) : null }
          <button className={styles.button} type='submit'>Войти</button>
          <Link className={styles.registration} to='/registration'>Создать аккаунт</Link>
        </Form>
      )}
      </Formik>
    </div>
  )
}