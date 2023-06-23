import { Sequelize, DataTypes, Model } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Like extends Model {}

Like.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    channelId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    videoId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'like',
    timestamps: false
})

export default Like