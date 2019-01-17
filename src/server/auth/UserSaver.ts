import UserData from './UserData'
import UserSavingData from './UserSavingData'

export default interface UserSaver {

    saveUser(data: UserSavingData): Promise<UserData>

}
