import { Sequelize, DataTypes, Model } from "sequelize"
import connectDB from "../db.js"
import dotenv from 'dotenv'
import User from './user-model.js'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL)

connectDB()

class Token extends Model {}

Token.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'token',
    timestamps: false
})

export default Token