const { Sequelize, DataTypes } = require('sequelize');

const Token = Sequelize.define("token", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    token: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    expire: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Token