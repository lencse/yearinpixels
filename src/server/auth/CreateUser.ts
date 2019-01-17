import User from './User'
import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from '../dic/params'
import UserSaver from './UserSaver'
import UuidGenerator from '../uuid/UuidGenerator'
import UserFactory from './UserFactory'

@injectable()
export default class CreateUser {

    constructor(
        @inject(TYPES.UserSaver) private saver: UserSaver,
        @inject(TYPES.UuidGenerator) private uuidGenerator: UuidGenerator,
        @inject(UserFactory) private userFactory: UserFactory
    ) {}

    public async handle(): Promise<User> {
        const data = await this.saver.saveUser({
            id: this.uuidGenerator.generate()
        })
        return {
            id: data.id
        }
    }

}
