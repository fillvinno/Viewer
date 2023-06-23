import { Sequelize, DataTypes, Model } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Subscribe extends Model {}

Subscribe.init({
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
    subscriberId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'subscribe',
    timestamps: false
})

export default Subscribe