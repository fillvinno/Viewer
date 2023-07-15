import { Sequelize } from 'sequelize'
import { Channel, Subscribe } from '../models/associations.js'

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
    async getChannelById(channelId) {
        const channel = await Channel.findOne({ where: { id: channelId } })
        console.log('channelById ->', channel.dataValues)
        return channel.dataValues
    }
    async subscribe(channelId, subscriberId) {
        const subscribe = await Subscribe.create({ channelId, subscriberId })
        const channel = await Channel.findOne({ where: { id: subscriberId } })
        channel.followers = channel.followers + 1
        channel.save()
        return { subscribe: subscribe.dataValues, channel: channel.dataValues }
    }
    async unSubscribe(channelId, subscriberId) {
        const subscribe = await Subscribe.destroy({ where: { channelId, subscriberId } })
        const channel = await Channel.findOne({ where: { id: subscriberId } })
        channel.followers = channel.followers - 1
        channel.save()
        return { channel: channel.dataValues }
    }
    async isSubscribed(channelId, subscriberId) {
        const subscribe = await Subscribe.findOne({ where: { channelId, subscriberId } })
        return subscribe ? true : false
    }
    async getSubscribes(channelId) {
        // получение всех подписок канала
        const subscribes = await Subscribe.findAll({ where: { channelId } })

        let subscribesArray = []
        // поиск канала из таблицы с подписками
        for (const subscribe of subscribes) {
            let subscribeData = await this.getChannelById(subscribe.subscriberId)
            subscribesArray.push(subscribeData)
        }

        return subscribesArray
    }
    // async deleteChannel(userId) {
        
    // }
}

export default new ChannelService()