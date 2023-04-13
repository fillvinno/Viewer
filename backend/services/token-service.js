import jwt from "jsonwebtoken"
import Sequelize from "sequelize"
import { Token } from '../models/associations.js'
import connectDB from "../db.js"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL)

connectDB()

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
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
}

export default new TokenService()