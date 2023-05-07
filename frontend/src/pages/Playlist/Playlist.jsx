import React from 'react'
import styles from './Playlist.module.css'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import preview from '../../img/preview.png'
import playIcon from '../../img/videoplayer/play.svg'
import shareIcon from '../../img/share.svg'
import dotsIcon from '../../img/3dotsIcon.svg'
import PlaylistVideocards from '../../components/PlaylistVideocards/PlaylistVideocards'

export default function Playlist() {
  return (
    <Layout>
        <div className={styles.wrap}>
            <div className={styles.firstVideoSection}>
                <div className={styles.firstVideoSectionWrap}> 
                    <Link to='/video:1' className={styles.firstVideoLink}>
                        <div className={styles.previewWrap}>
                            <img src={preview} alt="preview" className={styles.preview}/>
                            <div className={styles.previewOverlay}>
                                <img src={playIcon} alt='play' className={styles.playIcon} />
                                Воспроизвести
                            </div>
                        </div>
                    </Link>
                    <div className={styles.playlistInfoWrap}>
                        <p className={styles.firstVideoHeading}>Фляма снова пикает мид и умирает</p>
                        <Link to='/channel' className={styles.channelName}>Narihamo</Link>
                        <p className={styles.videoCount}>23 видео</p>
                        <Link to='/video:1' className={styles.playBtn}>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nihil earum natus unde. Saepe incidunt dolores porro dolor 
                            ratione voluptatibus. Rem doloribus totam saepe perspiciatis 
                            obcaecati provident nemo corporis velit? Deserunt?
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.videoList}>
                <PlaylistVideocards/>
            </div>
        </div>
    </Layout>
  )
}
