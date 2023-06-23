import React from 'react'
import styles from './CommentsList.module.css'
import CommentsListItem from '../CommentsListItem/CommentsListItem'

export default function CommentsList({comments}) {
  return (
    <div className={styles.wrap}>
        {
            comments.map(comment => ( <CommentsListItem key={comment?.id} comment={comment}/> ))
        }
    </div>
  )
}
