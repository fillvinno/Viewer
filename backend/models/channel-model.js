import { Sequelize, DataTypes, Model } from "sequelize"
import connectDB from "../db.js"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL)

connectDB()

class Channel extends Model {}

Channel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
        allowNull: false
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followings: {
        type: DataTypes.INTEGER,
        allowNull: false
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