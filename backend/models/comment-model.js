import { Sequelize, DataTypes, Model } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    videoId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    channelName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    channelId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING(2048),
        allowNull: false,
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'comment',
    timestamps: false
})

export default Comment