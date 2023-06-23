import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import styles from './FindVideo.module.css'
import FindedVideos from '../../components/FindedVideos/FindedVideos'
import VideoService from '../../services/VideoService'
import { useParams } from 'react-router-dom'

// const videos = [
//     {
//         id: '0c87a855-017c-4487-abab-73bb95df75cc',
//         title: 'Video 1',
//         channelName: 'Channel 1',
//         channelId: '47099f0f-d466-480c-9f82-4b200538fdd9',
//         views: 0,
//         previewPath: `uploads/2023-06-09T00-32-40.271Z-3200x2100_599785_[www.ArtFile.ru].jpg`,
//         videoPath: `uploads/2023-06-09T00-30-10.483Z-Cat Meows Underwater [ORIGINAL VIDEO].mp4`
//     },
//     {
//         id: '0c87a855-017c-4487-abab-73bb95df75cc',
//         title: 'Video 2',
//         channelName: 'Channel 2',
//         channelId: '47099f0f-d466-480c-9f82-4b200538fdd9',
//         views: 0,
//         previewPath: `uploads/2023-06-09T00-32-40.271Z-3200x2100_599785_[www.ArtFile.ru].jpg`,
//         videoPath: `uploads/2023-06-09T00-30-10.483Z-Cat Meows Underwater [ORIGINAL VIDEO].mp4`
//     },
//     {
//         id: '0c87a855-017c-4487-abab-73bb95df75cc',
//         title: 'Video 3',
//         channelName: 'Channel 3',
//         channelId: '47099f0f-d466-480c-9f82-4b200538fdd9',
//         views: 0,
//         previewPath: `uploads/2023-06-09T00-32-40.271Z-3200x2100_599785_[www.ArtFile.ru].jpg`,
//         videoPath: `uploads/2023-06-09T00-30-10.483Z-Cat Meows Underwater [ORIGINAL VIDEO].mp4`
//     },
//     {
//         id: '0c87a855-017c-4487-abab-73bb95df75cc',
//         title: 'Video 4',
//         channelName: 'Channel 4',
//         channelId: '47099f0f-d466-480c-9f82-4b200538fdd9',
//         views: 0,
//         previewPath: `uploads/2023-06-09T00-32-40.271Z-3200x2100_599785_[www.ArtFile.ru].jpg`,
//         videoPath: `uploads/2023-06-09T00-30-10.483Z-Cat Meows Underwater [ORIGINAL VIDEO].mp4`
//     }
// ]

export default function FindVideo() {
    const params = useParams()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await VideoService.find(params?.title)
                setVideos(response?.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [params?.title])

    return (
        <Layout>
            <h2 className={styles.heading}>Результаты</h2>
            <FindedVideos videos={videos}/>
        </Layout>
)
}