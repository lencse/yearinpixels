import User from './User'
import 'reflect-metadata'
import { injectable } from 'inversify'
import UserSaver from './UserSaver'
import UuidGenerator from '../uuid/UuidGenerator'
import UserFactory from './UserFactory'

@injectable()
export default class CreateUser {

    public static construct(
        saver: UserSaver,
        uuidGenerator: UuidGenerator
    ): CreateUser {
        return new CreateUser(saver, uuidGenerator, new UserFactory())
    }

    constructor(
        private saver: UserSaver,
        private uuidGenerator: UuidGenerator,
        private userFactory: UserFactory
    ) {}

    public async handle(): Promise<User> {
        const data = await this.saver.saveUser({
            id: this.uuidGenerator.generate()
        })
        return this.userFactory.fromData(data)
    }

}
