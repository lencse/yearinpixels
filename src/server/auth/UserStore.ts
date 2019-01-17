import UserData from './UserData'

export default interface UserStore {

    findUser(id: string): Promise<UserData>

}
