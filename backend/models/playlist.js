const { Sequelize, DataTypes } = require('sequelize');

const Playlist = Sequelize.define("playlist", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    channel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    channel_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Playlist