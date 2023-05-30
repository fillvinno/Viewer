import { Sequelize } from 'sequelize'
import { Video } from '../models/associations.js'

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class VideoService {
    async createVideo(payload) {
        // const video = Video.create({  })
    }
    async deleteVideo() {

    }
}

export default new VideoService()