import CreateUser from '../../../../src/server/auth/CreateUser'
import UserData from '../../../../src/server/auth/UserData'
import UserSavingData from '../../../../src/server/auth/UserSavingData'
import UserFactory from '../../../../src/server/auth/UserFactory'

describe('CreateUser', () => {
    it('User is created after the request', async () => {
        const saver = {
            user: null,
            async saveUser(data: UserSavingData): Promise<UserData> {
                this.user = data
                return data
            }
        }
        const handler = new CreateUser(
            saver,
            {
                generate(): string {
                    return 'x'
                }
            },
            new UserFactory()
        )

        const result = await handler.handle()

        expect('x').toEqual(result.id)
        expect('x').toEqual(saver.user.id)
    })
})
