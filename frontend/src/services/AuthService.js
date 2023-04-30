import $api, { API_URL } from "../http"

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {email, password})
    }
    static async registration(email, nickname, password) {
        return $api.post('/registration', {email, nickname, password})
    }
    static async logout() {
        return $api.post('/logout')
    }
    static async checkAuth() {
        return $api.get(`${API_URL}/refresh`)
    }
}