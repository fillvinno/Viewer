import $api from "../http"

export default class UserService {
    static fetchUsers() {
        return $api.get('/users')
    } 
    static sendDeleteMessage(userId, channelId) {
        return $api.post('/send-delete-message', {userId, channelId})
    }
}