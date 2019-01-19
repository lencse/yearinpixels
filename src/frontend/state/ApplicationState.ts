import User from '../auth/User'
import NullUser from '../auth/NullUser'

export default interface ApplicationState {

    user: User

}

export function initial(): ApplicationState {
    return {
        user: new NullUser()
    }
}
