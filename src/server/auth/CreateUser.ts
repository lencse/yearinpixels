import User from './User'
import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from '../infrastructure/dic/params'
import UserSaver from './UserSaver'
import UuidGenerator from '../infrastructure/uuid/UuidGenerator'

@injectable()
export default class CreateUser {

    constructor(
        @inject(TYPES.UserSaver) private saver: UserSaver,
        @inject(TYPES.UuidGenerator) private uuidGenerator: UuidGenerator
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
