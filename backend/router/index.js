import { Router } from "express"
import UserController from '../contollers/user-controller.js'
import { body } from "express-validator"
import authMiddleware from "../middlewares/auth-middleware.js"
import fileMiddleware from "../middlewares/file-middleware.js"
import VideoController from "../contollers/video-controller.js"

const router = new Router()

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddleware, UserController.getUsers)
router.post('/create-video', fileMiddleware.fields([{ name: 'video', maxCount: 1 }, {name: 'preview', maxCount: 1}]) , VideoController.createVideo)

export default router