import $api from "../http"

export default class ChannelService {
    static async getChannelById(channelId) {
        return $api.get(`/get-channel/${channelId}`)
    }
    static async subscribe(channelId, subscriberId) {
        return $api.post(`/subscribe`, { channelId, subscriberId })
    }
    static async unSubscribe(channelId, subscriberId) {
        return $api.post(`/unsubscribe`, { channelId, subscriberId })
    }
    static async isSubscribed(channelId, subscriberId) {
        return $api.post(`/is-subscribed`, { channelId, subscriberId })
    }
    static async getSubscribes(id) {
        return $api.get(`/get-subscribes/${id}`)
    } 
}