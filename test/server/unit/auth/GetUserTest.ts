import UserData from '../../../../src/server/auth/UserData'
import UserFactory from '../../../../src/server/auth/UserFactory'
import GetUser from '../../../../src/server/auth/GetUser'

describe('GetUser', () => {
    it('User is retrieved', async () => {
        const store = {
            async findUser(id): Promise<UserData> {
                return {
                    id
                }
            }
        }
        const handler = new GetUser(
            store,
            new UserFactory()
        )

        const result = await handler.handle({id: 'x'})

        expect('x').toEqual(result.id)
    })
})
