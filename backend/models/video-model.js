import { Sequelize, DataTypes, Model } from "sequelize"
import connectDB from "../db.js"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL)

connectDB()

class Video extends Model {}

Video.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channelName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    channelId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'video',
    timestamps: false
})

export default Video