import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './router/index.js'
import connectDB from './db.js'
import express from 'express'

dotenv.config()

// connectDB()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

app.use(cors({
        credentials: true,
        origin: 'http://localhost:3000'
    }))

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту`);
    connectDB()
})