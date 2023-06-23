import { Router } from "express"
import UserController from '../contollers/user-controller.js'
import { body } from "express-validator"
import authMiddleware from "../middlewares/auth-middleware.js"
import fileMiddleware from "../middlewares/file-middleware.js"
import VideoController from "../contollers/video-controller.js"
import ChannelController from "../contollers/channel-controller.js"
import PlaylistController from "../contollers/playlist-controller.js"
import Video from "../models/video-model.js"

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
router.post('/create-playlist', fileMiddleware.single('preview') , PlaylistController.createPlaylist)
router.get('/get-channel-playlists/:id/:amount', PlaylistController.getAmmountChannelPlaylists)
router.get('/get-amount-videos/:amount', VideoController.getAmountVideos)
router.get('/get-channel-videos/:id/:amount', VideoController.getAmmountChannelVideos)
router.get('/get-video/:id', VideoController.getVideoById)
router.get('/get-channel/:id', ChannelController.getChannelById)
router.get('/get-playlist/:id', PlaylistController.getPlaylistById)
router.post('/add-video-to-playlist', PlaylistController.addVideoToPlaylist)
router.post('/get-videos-from-playlist', PlaylistController.getVideosFromPlaylist)
router.post('/like-video', VideoController.likeVideo)
router.post('/unlike-video', VideoController.unLikeVideo)
router.post('/is-video-liked', VideoController.isVideoLiked)
router.post('/subscribe', ChannelController.subscribe)
router.post('/unsubscribe', ChannelController.unSubscribe)
router.post('/is-subscribed', ChannelController.isSubscribed)
router.get('/get-video-comments/:id', VideoController.getVideoComments)
router.post('/create-comment', VideoController.createComment)
router.get('/find/:title', VideoController.find)
router.get('/get-subscribes/:id', ChannelController.getSubscribes)
router.post('/send-delete-message', UserController.sendDeleteMessage)
router.get('/delete-user/:userId/:channelId', UserController.deleteUser)
router.get('/dowload/:path', VideoController.downloadVideo)

export default router