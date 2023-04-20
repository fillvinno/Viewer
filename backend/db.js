import { Sequelize } from "sequelize"
import colors from 'colors'

const connectDB = async () => {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        dialect: "postgres",
        host: process.env.DB_HOST,
        logging: false,
        define: {
          timestamps: false
        }
      })
    try {
        await sequelize.authenticate();
        console.log("Соединение установлено успешно.".bgGreen.black)
    } catch (e) {
        console.error("Не удается подключиться к базе данных: ".bgRed.black, e)
    }
}

export default connectDB