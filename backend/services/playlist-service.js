import { Sequelize } from 'sequelize'
import { Playlist, Video } from '../models/associations.js'
import videoService from './video-service.js'

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class PlaylistService {
    async createPlaylist(payload) {
        console.log(payload)
        const playlist = await Playlist.create({
            title: payload.title,
            description: payload.description,
            channelName: payload.channelName,
            previewPath: payload.previewPath,
            channelId: payload.channelId
        })
        
        return {playlist: playlist.dataValues}
    }

    async getAmountChannelPlaylists(amount = 40, id) {
        const playlists = await Playlist.findAll({ where: { channelId: id }})
        
        const playlistsArray = []

        for (const playlist of playlists) {
            playlistsArray.push(playlist.dataValues)
        }
        // фильтрация массива видео по количеству
        const outputArray = []

        for (let i = 0; outputArray.length < amount; i++) {
            outputArray.push(playlistsArray[i])
        }

        let result = outputArray.filter(Boolean)
        return result
    }

    async getPlaylistById(id) {
        const playlist = await Playlist.findOne({ where: { id: id }})
        
        return playlist.dataValues
    }

    async addVideoToPlaylist(playlistId, videoId) {
        let playlist = await Playlist.findOne({ where: { id: playlistId }})
       
        for (const id of playlist.videosId) {
            if (id === videoId) {
                return
            }
        }

        playlist.videosId = [...playlist.dataValues.videosId, videoId]

        await playlist.save()
        return playlist.dataValues
    }

    async getVideosFromPlaylist(videos) {
        let videosArray = []

        for (const video of videos) {
            const videoData = await videoService.getVideoById(video)
            videosArray.push(videoData)
        }

        return videosArray
    }
}
    
export default new PlaylistService()