import UserData from './UserData'
import User from './User'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export default class UserFactory {

    public fromData(data: UserData): User {
        return {
            id: data.id
        }
    }

}
