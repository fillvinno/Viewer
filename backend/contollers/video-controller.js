import videoService from "../services/video-service.js"

class VideoController {
    async createVideo(req, res, next) {
        try {
            const { video, preview } = req.files
            const { title, description } = req.body
            
            const payload = {   
                videoPath: video.map(file => file.path),
                previewPath: preview.map(file => file.path),
                title: title,
                description: description,
            }

            videoService.createVideo()
        } catch (e) {
            next(e)
        }
    }
}

export default new VideoController()