import { Sequelize, DataTypes, Model, BelongsTo } from "sequelize"
import connectDB from "../db.js"
import dotenv from 'dotenv'
import Token from './token-model.js'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_URL)

connectDB()

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  activation_link: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize, 
  freezeTableName: true,
  modelName: 'user',
  timestamps: false
})

export default User