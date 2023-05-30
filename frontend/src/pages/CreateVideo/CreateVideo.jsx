import React, { useState } from 'react'
import styles from './CreateVideo.module.css'
import { Link } from 'react-router-dom'
import arrow from '../../img/menuArrow.svg'
import User from '../../components/User/User'
import { Formik, Form, Field } from 'formik'
import VideoService from '../../services/VideoService'

const validate = values => {
  const errors = {}
 
  if (!values.title) {
    errors.title = 'Обязательное поле'
  } 
  if (!values.description) {
    errors.description = 'Обязательное поле'
  }
  if (!values.video) {
    errors.video = 'Обязательное поле'
  } 
  if (!values.preview) {
    errors.preview = 'Обязательное поле'
  }

  return errors
}

export default function CreateVideo() {

  const [videoName, setVideoName] = useState('')
  const [previewName, setPreviewName] = useState('')

  const [videoFile, setVideoFile] = useState()
  const [previewFile, setPreviewFile] = useState()

  const formData = new FormData()

  const handleVideofileChange = (e) => {
    const file = e.target.files[0]
    // formData.append('video', file)
    setVideoFile(file)
    console.log(videoFile)
    setVideoName(file.name)
  }
  
  const handlePreviewChange = (e) => {
    const file = e.target.files[0]
    // formData.append('preview', file)
    setPreviewFile(file)
    setPreviewName(file.name)
  }

  return (
    <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.leftSideHeader}>
            <Link to='/home' className={styles.backToApp}>
              <img src={arrow} alt="arrow" className={styles.arrowImg}/>
              Вернуться на главную
            </Link>
          </div>
          <div className={styles.rightsideHeader}>
            <User/>
          </div>
        </header>
        <main className={styles.content}>
          <Formik
            initialValues={{
              title: '',
              description: ``,
              video: '',
              preview: ''
            }}
            validate = { validate }
            onSubmit = { async (values) => {
                try {
                  formData.delete('title')
                  formData.delete('description')
                  
                  formData.append('title', values.title)
                  formData.append('description', values.description)
                  formData.append('video', videoFile)
                  formData.append('preview', previewFile)

                  const response = VideoService.createVideo(formData)
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
                    <h2>Файлы:</h2>
                    <p className={styles.fileinputHeading}>Выберите видео:</p>
                    { touched.video && errors.video ? (<div className={styles.errors}>{errors.video}</div>) : null }
                    <label className={styles.inputFile}>
                      <span className={styles.inputFileText} type='text'>{ videoName }</span>
                      <Field
                        type='file'
                        name='video'
                        autoComplete='new-password'
                        accept='.mp4'
                        className={styles.videoInput}
                        values={values.video}
                        onChange={(e) => { handleVideofileChange(e); handleChange(e) }}
                      />
                      <span className={styles.inputFileBtn}>Выберите файл</span>
                    </label>
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
                        values={values.preview}
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
