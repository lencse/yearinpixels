import User from './User'
import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from '../dic/params'
import UserStore from './UserStore'
import GetUserRequest from './GetUserRequest'
import UserFactory from './UserFactory'

@injectable()
export default class GetUser {

    constructor(
        @inject(TYPES.UserStore) private store: UserStore,
        @inject(UserFactory) private userFactory: UserFactory
    ) {}

    public async handle(request: GetUserRequest): Promise<User> {
        const data = await this.store.findUser(request.id)
        return this.userFactory.fromData(data)
    }

}
