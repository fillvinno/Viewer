class UserDto {
    id
    email
    nickname
    isActivated

    constructor(model) {
        this.id = model?.id
        this.email = model?.email
        this.nickname = model?.nickname
        this.isActivated = model?.isActivated
    }
}

export default UserDto