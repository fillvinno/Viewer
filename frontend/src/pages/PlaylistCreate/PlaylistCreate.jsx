import React, { useState } from 'react'
import styles from './PlaylistCreate.module.css'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../../img/menuArrow.svg'
import User from '../../components/User/User'
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import PlaylistService from '../../services/PlaylistService'

const validate = values => {
    const errors = {}
   
    if (!values.title) {
      errors.title = 'Обязательное поле'
    } 
    if (!values.description) {
      errors.description = 'Обязательное поле'
    }
    if (!values.preview) {
      errors.preview = 'Обязательное поле'
    }
  
    return errors
  }

export default function PlaylistCreate() {
    const user = useSelector(state => state.auth.user)

    const [previewName, setPreviewName] = useState('')
    const [previewFile, setPreviewFile] = useState()
    
    const formData = new FormData()

    const handlePreviewChange = (e) => {
      const file = e.target.files[0]
      setPreviewFile(file)
      setPreviewName(file.name)
    }

    const navigate = useNavigate()
    
  return (
    <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.leftSideHeader}>
            <Link to={`/channel/${user.channelId}/playlists`} className={styles.backToApp}>
              <img src={arrow} alt="arrow" className={styles.arrowImg}/>
              Вернуться на главную
            </Link>
          </div>
          <div className={styles.rightsideHeader}>
            <User user={user}/>
          </div>
        </header>
        <main className={styles.content}>
            <Formik 
                initialValues={{
                    title: '',
                    description: ``,
                    preview: ''
                }}
                validate = { validate }
                onSubmit = { async (values) => {
                    try {
                        formData.delete('title')
                        formData.delete('description')

                        formData.append('title', values.title)
                        formData.append('description', values.description)
                        formData.append('preview', previewFile)
                        formData.append('channelName', user?.nickname)
                        formData.append('channelId', user?.channelId)

                        const response = PlaylistService.createPlaylist(formData)

                        navigate('/home')
                    } catch (e) {
                        console.log(e?.response?.data?.message)
                    }  
                } 
                }
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className={styles.formWrap}>
                    <div className={styles.leftSideContent}>
                        <h2>Информация:</h2>
                        <p className={styles.fileinputHeading}>Название:</p>
                        { touched.title && errors.title ? (<div className={styles.errors}>{errors.title}</div>) : null }
                        <Field
                            type='text'
                            name='title'
                            autoComplete='new-password'
                            placeholder='Название'
                            className={styles.titleInput}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <p className={styles.fileinputHeading}>Описание:</p>
                        { touched.description && errors.description ? (<div className={styles.errors}>{errors.description}</div>) : null }
                        <Field
                            component='textarea'
                            name='description'
                            autoComplete='new-password'
                            placeholder='Описание'
                            className={styles.descriptionTextarea}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                    </div>
                    <div className={styles.rightSideContent}>
                        <h2>Обложка:</h2>
                        <p className={styles.fileinputHeading}>Выберите обложку:</p>
                        { touched.preview && errors.preview ? (<div className={styles.errors}>{errors.preview}</div>) : null }
                        <label className={styles.inputFile}>
                        <span className={styles.inputFileText} type='text'>{ previewName }</span>
                        <Field
                            type='file'
                            name='preview'
                            autoComplete='new-password'
                            accept='.png, .jpg, .jpeg'
                            className={styles.previewInput}
                            onChange={ (e) => { handlePreviewChange(e); handleChange(e) }}
                            value={values.preview}
                            onBlur={handleBlur}
                        />
                        <span className={styles.inputFileBtn}>Выберите файл</span>
                        </label>
                    </div>
                    </div>
                    <button className={styles.saveBtn} type='submit'>Сохранить</button>
                </Form>
                )}
            </Formik>
        </main>
    </div>
  )
}
