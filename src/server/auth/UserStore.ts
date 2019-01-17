import UserData from './UserData'

export default interface UserStore {

    find(id: string): Promise<UserData>

}
