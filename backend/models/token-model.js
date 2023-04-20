import { Sequelize, DataTypes, Model } from "sequelize"

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

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