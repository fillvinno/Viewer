
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import MailService from './mail-service.js'
import TokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import connectDB from '../db.js'
import { User } from '../models/associations.js'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL)

connectDB()
uuidv4()

class UserService {
    async registration(email, password, nickname, isActivated) {
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4()

        let user = await User.create({ email, password: hashPassword, activation_link: activationLink, nickname, isActivated})
        user = user.dataValues
        // console.log(user);
        await MailService.sendActivationMail(email, activationLink)

        const userDto = new UserDto(user) // id, email, isActivated
        // console.log(userDto.id);
        const tokens = TokenService.generateTokens({...userDto})
        // console.log(tokens);
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }
}

const papa = new UserService()
// papa.registration('papaaafaaфafaaaaaaaaаaa', '123', '123', true)

export default new UserService()