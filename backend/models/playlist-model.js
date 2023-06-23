import { Sequelize, DataTypes, Model, ARRAY } from "sequelize"

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Playlist extends Model {}

Playlist.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    videosId: {
        type: DataTypes.ARRAY(DataTypes.STRING(510)),
        defaultValue: [],
        allowNull: false,
    },
    previewPath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channelName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channelId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'playlist',
    timestamps: false
})

export default Playlist