import { Sequelize, DataTypes, Model } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Channel extends Model {}

Channel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: true
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    followers: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    followings: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'channel',
    timestamps: false
})

export default Channel