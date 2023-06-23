import $api from "../http"

export default class VideoService {
    static async createVideo(fd) {
        return $api.post('/create-video', fd, {
            headers: { 
                "Content-Type": "multipart/form-data"
            }
        })
    }
    static async getAmountVideos(amount) {
        return $api.get(`/get-amount-videos/${amount}`)
    }
    static async getAmountChannelVideos(amount, channelId) {
        return $api.get(`/get-channel-videos/${channelId}/${amount}`)
    }
    static async getVideoById(videoId) {
        return $api.get(`/get-video/${videoId}`)
    }
    static async likeVideo(videoId, channelId) {
        return $api.post('/like-video', {videoId, channelId})
    }    
    static async unLikeVideo(videoId, channelId) {
        return $api.post('/unlike-video', {videoId, channelId})
    }
    static async isVideoLiked(videoId, channelId) {
        return $api.post(`/is-video-liked`, {videoId, channelId})
    }  
    static async getVideoComments(videoId) {
        return $api.get(`/get-video-comments/${videoId}`)
    }
    static async createComment(videoId, channelId, channelName, commentText) {
        return $api.post(`/create-comment`, {videoId, channelId, channelName, commentText})
    }  
    static async find(title) {
       return $api.get(`/find/${title}`)
    }
    static async download(path) {
        return $api.get(`/download/${path}`)
    }
}