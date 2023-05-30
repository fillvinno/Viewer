import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './router/index.js'
import connectDB from './db.js'
import express from 'express'
import errorMiddleware from './middlewares/error-middleware.js'
import path from 'path'

dotenv.config()

// connectDB()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json({ extended: true }))
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT} порту`);
    connectDB()
})