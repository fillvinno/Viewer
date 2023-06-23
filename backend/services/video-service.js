import { Sequelize } from 'sequelize'
import { Video, Channel, Like, Comment } from '../models/associations.js'

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class VideoService {
    async createVideo(payload) {
        let channel = await Channel.findOne({ where: { id: payload.channelId } })
        channel = channel.dataValues

        const video = await Video.create({ 
                title: payload.title, 
                description: payload.description, 
                channelName: channel.name,
                channelId: channel.id,  
                videoPath: payload.videoPath, 
                previewPath: payload.previewPath,
            })
            
        return { video: video.dataValues }
    }

    async getAmountVideos(amount = 18) {
        const videos = await Video.findAll()
        // парсинг обьекта из бд в массив с обьектами видео
        const videosArray = []
        for (const video of videos) {
            videosArray.push(video.dataValues)
        }
        // фильтрация массива видео по количеству
        const outputArray = []

        for (let i = 0; outputArray.length < amount; i++) {
            outputArray.push(videosArray[i])
        }

        let result = outputArray.filter(Boolean)
        return result
    }

    async getVideoById(videoId) {
        const video = await Video.findOne({ where: { id: videoId } })

        return video.dataValues
    }

    async getAmountChannelVideos(amount = 40, channelId) {
        const videos = await Video.findAll({ where: { channelId: channelId } })
        // парсинг обьекта из бд в массив с обьектами видео
        const videosArray = []

        for (const video of videos) {
            videosArray.push(video.dataValues)
        }
        // фильтрация массива видео по количеству
        const outputArray = []

        for (let i = 0; outputArray.length < amount; i++) {
            outputArray.push(videosArray[i])
        }

        let result = outputArray.filter(Boolean)
        return result
    }

    async deleteVideo() {
       
    }

    async likeVideo(videoId, channelId) {
        const like = await Like.create({videoId, channelId})
        const video = await Video.findOne({ where: { id: videoId } })
        video.likesCounter = video.dataValues.likesCounter + 1
        video.save()
        return like.dataValues
    }

    async unLikeVideo(videoId, channelId) {
        const like = await Like.destroy({ where: { videoId: videoId, channelId: channelId } })
        const video = await Video.findOne({ where: { id: videoId } })
        video.likesCounter = video.dataValues.likesCounter - 1
        video.save()
        return like.dataValues
    }

    async isVideoLiked(videoId, channelId) {
        const like = await Like.findOne({ where: { videoId, channelId } })
        return like ? true : false
    }

    async getVideoComments(videoId) {
        const commentsFromBd = await Comment.findAll({ where: { videoId } })

        const commentsArray = []

        for (const comment of commentsFromBd) {
            commentsArray.push(comment.dataValues)
        }
        console.log(commentsArray)

        return commentsArray
    }

    async createComment(videoId, channelId, channelName, commentText) {
        const comment = await Comment.create({ videoId, channelId, channelName, text: commentText })
        return comment.dataValues
    }

    async find(title) {
        const videos = await Video.findAll({ where: { title } })

        const videosArray = []

        for (const video of videos) {
            videosArray.push(video.dataValues)
        }

        return videosArray
    }
}

export default new VideoService()