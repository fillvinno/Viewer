import ChannelAbout from "./pages/Channel/ChannelAbout/ChannelAbout"
import ChannelChannels from "./pages/Channel/ChannelChannels/ChannelChannels"
import ChannelFeatured from "./pages/Channel/ChannelFeatured/ChannelFeatured"
import ChannelPlaylists from "./pages/Channel/ChannelPlaylists/ChannelPlaylists"
import CreateVideo from "./pages/CreateVideo/CreateVideo"
import FindVideo from "./pages/FindVideo/FindVideo"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Playlist from "./pages/Playlist/Playlist"
import PlaylistCreate from "./pages/PlaylistCreate/PlaylistCreate"
import Registration from "./pages/Registration/Registration"
import Settings from "./pages/Settings/Settings"
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer"
import { CHANNEL_ABOUT_ROUTE, CHANNEL_CHANNELS_ROUTE, CHANNEL_FEATURED_ROUTE, CHANNEL_PLAYLISTS_ROUTE, CREATE_PLAYLIST_ROUTE, CREATE_ROUTE, FIND_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PLAYLIST_ROUTE, REGISTRATION_ROUTE, ROOT_ROUTE, SETTINGS_ROUTE, VIDEO_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: ROOT_ROUTE,
        Component: <Home/>
    },
    {
        path: CREATE_ROUTE,
        Component: <CreateVideo/>
    },
    {
        path: CREATE_PLAYLIST_ROUTE,
        Component: <PlaylistCreate/>
    },
    {
        path: VIDEO_ROUTE,
        Component: <VideoPlayer/>
    },
    {
        path: CHANNEL_FEATURED_ROUTE,
        Component: <ChannelFeatured/>
    },
    {
        path: CHANNEL_PLAYLISTS_ROUTE,
        Component: <ChannelPlaylists/>
    },
    {
        path: CHANNEL_CHANNELS_ROUTE,
        Component: <ChannelChannels/>
    },
    {
        path: CHANNEL_ABOUT_ROUTE,
        Component: <ChannelAbout/>
    },
    {
        path: PLAYLIST_ROUTE,
        Component: <Playlist/>
    },
    {
        path: FIND_ROUTE,
        Component: <FindVideo/>
    },
    {
        path: SETTINGS_ROUTE,
        Component: <Settings/>
    },
]

export const unAuthRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Registration/>
    },
]