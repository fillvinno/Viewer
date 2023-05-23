import $api, { API_URL } from "../http"

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {email, password})
        // fetch('http://localhost:5000/api/login', {method: 'POST', body: {email, password}}).then(res => console.log(res)).catch(e => console.log(e))
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