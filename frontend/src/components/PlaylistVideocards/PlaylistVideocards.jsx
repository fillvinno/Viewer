import React from 'react'
import styles from './PlaylistVideocards.module.css'
import PlaylistVideocardsItem from '../PlaylistVideocardsItem/PlaylistVideocardsItem'

export default function PlaylistVideocards() {
  return (
    <div className={styles.wrap}>
      <PlaylistVideocardsItem/>
      <PlaylistVideocardsItem/>
      <PlaylistVideocardsItem/>
      <PlaylistVideocardsItem/>
    </div>
  )
}
