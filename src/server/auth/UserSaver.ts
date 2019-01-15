import UserData from './UserData'

export default interface UserSaver {

    saveUser(data: UserData): Promise<UserData>

}
