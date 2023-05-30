class UserDto {
    id
    email
    nickname
    isActivated
    channelId

    constructor(model) {
        this.id = model?.id
        this.email = model?.email
        this.nickname = model?.nickname
        this.isActivated = model?.isActivated
        this.channelId = model?.channelId
    }
}

export default UserDto