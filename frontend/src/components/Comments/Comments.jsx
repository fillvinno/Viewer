import React from 'react'
import styles from './Comments.module.css'
import { Formik, Form, Field } from 'formik';
import VideoService from '../../services/VideoService';

const validate = values => {
    const errors = {}
   
    if (!values.comment) {
      errors.comment = 'Введите текст'
    }
  
    return errors
  }

export default function Comments({videoId, channelId, channelName, btnClick, setBtnClick}) {
  return (
    <Formik
        initialValues={{
            comment: '',
        }}
        validate = { validate }
        onSubmit={ async (values) => {
            try {
                const response = await VideoService.createComment(videoId, channelId, channelName, values.comment)
                setBtnClick(!btnClick)
                console.log(response.data)
            } catch (e) {
                console.log(e?.response?.data?.message)
            }
        }}
    >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Field
                    type="text" 
                    name='comment'
                    // component='textarea'
                    autoComplete='new-password' 
                    className={styles.input} 
                    placeholder='Введите комментарий' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                />
                <button className={styles.button} type='submit'>Отправить</button>
            </Form>
      )}
    </Formik>
  )
}
