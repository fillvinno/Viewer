import jwt from "jsonwebtoken"
import Sequelize from "sequelize"
import { Token } from '../models/associations.js'

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ where: { userId }})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return await tokenData.save()
        }
        const token = await Token.create({userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({ where: { refreshToken } })
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({ where: { refreshToken } })
        return tokenData
    }
}

export default new TokenService()