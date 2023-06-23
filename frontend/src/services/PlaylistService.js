import $api from "../http"

export default class PlaylistService {
    static async createPlaylist(fd) {
        return $api.post('/create-playlist', fd, {
            headers: { 
                "Content-Type": "multipart/form-data"
            }
        })
    }
    static async getAmountChannelPlaylists(amount, channelId) {
        return $api.get(`/get-channel-playlists/${channelId}/${amount}`)
    }
    static async getPlaylistById(id) {
        return $api.get(`/get-playlist/${id}`)
    }
    static async addVideoToPlaylist(playlistId, videoId) {
        return $api.post(`/add-video-to-playlist`, { playlistId, videoId })
    }
    static async getVideosFromPlaylist(videos) {
        return $api.post('/get-videos-from-playlist', videos)
    }
}