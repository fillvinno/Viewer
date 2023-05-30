import { Sequelize } from 'sequelize'
import { Video, Channel } from '../models/associations.js'

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

    async deleteVideo() {

    }
}

export default new VideoService()