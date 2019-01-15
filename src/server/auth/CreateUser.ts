import User from './User'
import * as uuid from 'uuid/v4'
import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from '../infrastructure/dic/params'
import UserSaver from './UserSaver'

@injectable()
export default class CreateUser {

    constructor(
        @inject(TYPES.UserSaver) private saver: UserSaver
    ) {}

    public async handle(): Promise<User> {
        const creating = {
            id: uuid()
        }
        const data = await this.saver.saveUser(creating)
        return {
            id: data.id
        }
    }

}
