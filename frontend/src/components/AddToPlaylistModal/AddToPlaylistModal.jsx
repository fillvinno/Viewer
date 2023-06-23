import React, { useEffect, useState } from 'react'
import styles from './AddToPlaylistModal.module.css'
import PlaylistModalList from '../PlaylistModalList/PlaylistModalList'
import cross from '../../img/cross-icon.svg'
import PlaylistService from '../../services/PlaylistService'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AddToPlaylistModal({active, setActive}) {
    const user = useSelector(state => state.auth.user)
    const [playlists, setPlaylists] = useState()
    const params = useParams()

    useEffect(() => {
        async function getPlaylists() {
            const response = await PlaylistService.getAmountChannelPlaylists(40, user?.channelId)
            setPlaylists(response?.data)
        }
        if (active) {
            getPlaylists()
        }
    }, [active, user])

    return (
        <div className={active ? `${styles.wrap} ${styles.active}` : `${styles.wrap}`} onClick={() => setActive(false)}>
            <div className={active ? `${styles.modalWrap} ${styles.active}` : `${styles.modalWrap}`} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <button className={styles.modalCloseBtn} onClick={() => setActive(false)}>
                        <img src={cross} alt="cross" className={styles.cross}/>
                    </button>
                </div>
                <PlaylistModalList playlists={playlists} videoId={params?.id} channelId={user?.channelId} active={active} setActive={setActive}/>
            </div>
        </div>
  )
}