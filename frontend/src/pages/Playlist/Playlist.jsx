import React, { useEffect, useState } from 'react'
import styles from './Playlist.module.css'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import preview from '../../img/preview.png'
import playIcon from '../../img/videoplayer/play.svg'
import shareIcon from '../../img/share.svg'
import dotsIcon from '../../img/3dotsIcon.svg'
import PlaylistVideocards from '../../components/PlaylistVideocards/PlaylistVideocards'
import { useParams } from 'react-router-dom'
import PlaylistService from '../../services/PlaylistService'

export default function Playlist() {
    let params = useParams()
    const [playlist, setPlaylist] = useState()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const playlist = await PlaylistService.getPlaylistById(params.id)
            setPlaylist(playlist?.data)
          }
          fetchData()
    }, [params?.id])

    useEffect(() => {
        async function fetchData() {
            const videosArray = await PlaylistService.getVideosFromPlaylist(playlist?.videosId)
            setVideos(videosArray?.data)
          }
          fetchData()
    }, [playlist?.videosId])

    return (
    <Layout>
        <div className={styles.wrap}>
            <div className={styles.firstVideoSection}>
                <div className={styles.firstVideoSectionWrap}> 
                    <Link to={`/video/${videos[0]?.id}`} className={styles.firstVideoLink}>
                        <div className={styles.previewWrap}>
                            <img src={`http://localhost:5000/${playlist?.previewPath}`} alt="preview" className={styles.preview}/>
                            <div className={styles.previewOverlay}>
                                <img src={playIcon} alt='play' className={styles.playIcon} />
                                Воспроизвести
                            </div>
                        </div>
                    </Link>
                    <div className={styles.playlistInfoWrap}>
                        <p className={styles.firstVideoHeading}>{ playlist && playlist?.title }</p>
                        <Link to={`/channel/${playlist?.channelId}`} className={styles.channelName}>{ playlist && playlist?.channelName }</Link>
                        <p className={styles.videoCount}>{ playlist && playlist?.videosId?.length} видео</p>
                        <Link to={`/video/${playlist?.videosId[0]}`} className={styles.playBtn}>
                            <img src={playIcon} alt='play' className={styles.playIcon} />
                            Воспроизвести
                        </Link>
                        <div className={styles.playlistBtns}>
                            <button className={styles.playlistBtn}>
                                <span className='icon-saved'></span>
                            </button>
                            <button className={styles.playlistBtn}>
                                <img src={shareIcon} alt='share' className={styles.shareIcon}/>
                            </button>
                            <button className={styles.playlistBtn}>
                                <img src={dotsIcon} alt='more' className={styles.dotsIcon}/>
                            </button>
                        </div>
                        <p className={styles.description}>
                            { playlist && playlist?.description }
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.videoList}>
                <PlaylistVideocards videos={videos}/>
            </div>
        </div>
    </Layout>
  )
}