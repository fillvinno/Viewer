import playlistService from '../services/playlist-service.js'

class PlaylistController {
    async createPlaylist(req, res, next) {
        try {
            const preview = req.file
            const { title, description, channelName, channelId } = req.body
            console.log(channelName)
            const payload = {   
                previewPath: preview.path,
                title: title,
                description: description,
                channelId: channelId,
                channelName: channelName,
            }

            const playlist = await playlistService.createPlaylist(payload)

            res.json(playlist)
        } catch (e) {
            next(e)
        }
    }

    async getAmmountChannelPlaylists(req, res, next) {
        try {
            const { amount, id } = req.params
            const playlists = await playlistService.getAmountChannelPlaylists(amount, id)
            return res.json(playlists)
        } catch (e) {
            next(e)
        }
    }
    
    async getPlaylistById(req, res, next) {
        try {
            const { id } = req.params
            const playlist = await playlistService.getPlaylistById(id)
            console.log(playlist)
            return res.json(playlist)
        } catch (e) {
            next(e)
        }
    }

    async addVideoToPlaylist(req, res, next) {
        try {
            const { playlistId, videoId } = req.body
            const playlist = await playlistService.addVideoToPlaylist(playlistId, videoId)
            console.log(playlist)
            return res.json(playlist)
        } catch (e) {
            next(e)
        }
    }

    async getVideosFromPlaylist(req, res, next) {
        try {
            const videosId = req.body
            // console.log(videosId)
            const videos = await playlistService.getVideosFromPlaylist(videosId)
            console.log(videos)
            return res.json(videos)
        } catch (e) {
            next(e)
        }
    }
}

export default new PlaylistController()