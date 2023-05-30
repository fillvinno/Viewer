import { Sequelize } from 'sequelize'
import { Channel } from '../models/associations.js'

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class ChannelService {
    async createChannel(userId, name) {
        const channel = await Channel.create({ userId, name })
        return {channel: channel.dataValues}
    }
    async changeDescription(text, userId) {
        const channel = await Channel.findOne({ where: { userId } })
        channel.description = text
        await channel.save()
    }
    async changeName(channelName, userId) {
        const channel = await Channel.findOne({ where: { userId } })
        channel.name = channelName
        await channel.save()
    }
    async deleteChannel(userId) {
        
    }
}

export default new ChannelService()