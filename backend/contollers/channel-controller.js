import channelService from "../services/channel-service.js"


class ChannelController {
    async getChannelById(req, res, next) {
        try {
            const { id } = req.params
            const channel = await channelService.getChannelById(id)
            return res.json(channel)
        } catch (e) {
            next(e)
        }
    }
    async subscribe(req, res, next) {
        try {
            const { channelId, subscriberId } = req.body
            const subscribe = await channelService.subscribe(channelId, subscriberId)
            return res.json(subscribe)
        } catch (e) {
            next(e)
        }
    }
    async unSubscribe(req, res, next) {
        try {
            const { channelId, subscriberId } = req.body
            const subscribe = await channelService.unSubscribe(channelId, subscriberId)
            return res.json(subscribe)
        } catch (e) {
            next(e)
        }
    }
    async isSubscribed(req, res, next) {
        try {
            const { channelId, subscriberId } = req.body
            const subscribe = await channelService.isSubscribed(channelId, subscriberId)
            return res.json(subscribe)
        } catch (e) {
            next(e)
        }
    }
    async getSubscribes(req, res, next) {
        try {
            const { id } = req.params
            console.log('channel =>', id)
            const subscribes = await channelService.getSubscribes(id)
            return res.json(subscribes)
        } catch (e) {
            next(e)
        }
    }
}

export default new ChannelController()