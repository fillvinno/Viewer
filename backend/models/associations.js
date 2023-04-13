import Channel from "./channel-model.js"
import Playlist from "./playlist-model.js"
import Token from "./token-model.js"
import User from "./user-model.js"
import Video from "./video-model.js"

User.hasOne(Token, {
    foreignKey: 'userId'
})
Token.belongsTo(User)

User.hasOne(Channel, {
    foreignKey: 'userId'
})
Channel.belongsTo(User)

Channel.hasMany(Video, {
    foreignKey: 'channelId'
})
Video.belongsTo(Channel)

Channel.hasMany(Playlist, {
    foreignKey: 'channelId'
})
Playlist.belongsTo(Channel)

await User.sync({ alter: true })
console.log('Таблица для модели User была (пере)создана!')

await Token.sync({ alter: true })
console.log('Таблица для модели Token была (пере)создана!')

await Channel.sync({ alter: true })
console.log('Таблица для модели Channel была (пере)создана!')

await Playlist.sync({ alter: true })
console.log('Таблица для модели Playlist была (пере)создана!')

await Video.sync({ alter: true })
console.log('Таблица для модели Video была (пере)создана!')

export { Channel, Playlist, Token, User, Video }