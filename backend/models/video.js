const { Sequelize, DataTypes } = require('sequelize');

const Video = Sequelize.define("video", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    views: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    likes: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    channel_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

export default Video