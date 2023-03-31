const { Sequelize, DataTypes } = require('sequelize');

const Channel = Sequelize.define("channel", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    views: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    followers: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    followings: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }   
});

export default Channel