import { Sequelize, DataTypes, Model, BelongsTo } from "sequelize"

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

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
    type: DataTypes.STRING(510),
    allowNull: false
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true
  },
  activationLink: {
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