const { Sequelize, DataTypes } = require('sequelize');

const User = Sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nickname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }, 
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    channel_idA: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  export default User