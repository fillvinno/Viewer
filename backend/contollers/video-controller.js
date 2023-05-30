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
            console.log(payload)
            const createdVideo = await videoService.createVideo(payload)


        } catch (e) {
            next(e)
        }
    }
}

export default new VideoController()