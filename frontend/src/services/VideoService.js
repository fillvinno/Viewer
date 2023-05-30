import $api from "../http"

export default class VideoService {
    static async createVideo(fd) {
        return $api.post('/create-video', fd, {
            headers: { 
                "Content-Type": "multipart/form-data"
            }
        })
    }
}