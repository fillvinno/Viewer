import videoService from "../services/video-service.js"

class VideoController {
    async createVideo(req, res, next) {
        try {
            const { video, preview } = req.files
            const { title, description, channelId } = req.body
            
            const payload = {   
                videoPath: video.map(file => file.path)[0],
                previewPath: preview.map(file => file.path)[0],
                title: title,
                description: description,
                channelId: channelId,
            }

            const createdVideo = await videoService.createVideo(payload)

            return res.json(createdVideo)
        } catch (e) {
            next(e)
        }
    }

    async getVideoById(req, res, next) {
        try {
           const video = await videoService.getVideoById(req.params.id)
           return res.json(video)
        } catch (e) {
            next(e)
        }
    }

    async getAmountVideos(req, res, next) {
        try {
            console.log(req.params)
            const videos = await videoService.getAmountVideos(req.params.amount)
            return res.json(videos)
        } catch (e) {
            next(e)
        }
    }

    async getAmmountChannelVideos(req, res, next) {
        try {
            const { amount, id } = req.params
            const videos = await videoService.getAmountChannelVideos(amount, id)
            return res.json(videos)
        } catch (e) {
            next(e)
        }
    }

    async likeVideo(req, res, next) {
        try {
            const { videoId, channelId } = req.body
            const like = await videoService.likeVideo(videoId, channelId)
            return res.json(like)
        } catch (e) {
            next(e)
        }
    }

    async unLikeVideo(req, res, next) {
        try {
            const { videoId, channelId } = req.body
            const like = await videoService.unLikeVideo(videoId, channelId)
            return res.json(like)
        } catch (e) {
            next(e)
        }
    }

    async isVideoLiked(req, res, next) {
        try {
            const { videoId, channelId } = req.body
            const like = await videoService.isVideoLiked(videoId, channelId)
            return res.json(like)
        } catch (e) {
            next(e)
        }
    }

    async getVideoComments(req, res, next) {
        try {
            const { id } = req.params
            const comments = await videoService.getVideoComments(id)
            return res.json(comments)
        } catch (e) {
            next(e)
        }
    }

    async createComment(req, res, next) {
        try {
            const { videoId, channelId, channelName, commentText } = req.body
            const createdComment = await videoService.createComment(videoId, channelId, channelName, commentText)
            return res.json(createdComment)
        } catch (e) {
            next(e)
        }
    }

    async find(req, res, next) {
        try {
            const {title} = req.params
            const videos = await videoService.find(title)
            return res.json(videos)
        } catch (e) {
            next(e)
        }
    }

    async downloadVideo(req, res, next) {
        try {
            const { path } = req.params
            return res.download(path)
        } catch (e) {
            next(e)
        }
    }
}

export default new VideoController()