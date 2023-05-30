import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import MailService from './mail-service.js'
import TokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import { Sequelize } from 'sequelize'
import { User, Channel } from '../models/associations.js'
import ApiError from '../exceptions/api-error.js'
import ChannelService from './channel-service.js'
import channelService from './channel-service.js'

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

uuidv4()

class UserService {
    async registration(email, nickname, password) {
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4()

        let user = await User.create({ email, nickname, password: hashPassword, activationLink })
        user = user.dataValues
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        await ChannelService.createChannel(user.id, nickname)
        let channel = await Channel.findOne({ where: { userId: user.id } })
        channel = channel.dataValues
        user.channelId = channel.id

        const userDto = new UserDto(user) // id, email, isActivated
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)


        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await User.findOne({ where: { activationLink } })
        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        // поиск пользователя в бд
        let user = await User.findOne({ where: { email } })
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        user = user.dataValues
        // сравнение пароля в бд и введенного пароля
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        let channel = await Channel.findOne({ where: { userId: user.id } })
        channel = channel.dataValues
        user.channelId = channel.id

        // генерация токенов
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        let user = await User.findByPk(userData.id)
        user = user.dataValues

        let channel = await Channel.findOne({ where: { userId: user.id } })
        channel = channel.dataValues
        user.channelId = channel.id

        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const users = await User.findAll()
        console.log(users);
        return users
    }

    async deleteUser(userId) {
        const user = User.destroy({ where: { userId } })
        ChannelService.deleteChannel()
    }
}

// const papa = new UserService()
// papa.registration('papaaafaaфafaaaaaaaaaaаaa', '123', '123', true)

export default new UserService()