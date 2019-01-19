import dic from '../../../src/server/dic/dic'
import * as supertest from 'supertest'

describe('ServerTest', () => {
    it('Server is working fine', async () => {
        const server = dic.server.init()
        const testServer = supertest(server.app.callback())

        const user1 = (await testServer.post('/api/user')).body.id
        const user2 = (await testServer.post('/api/user')).body.id

        expect((await testServer.get(`/api/user/${user1}`)).body).toEqual({
            id: user1
        })

        await testServer.post('/api/calendar-entry')
            .send(`userId=${user1}`)
            .send(`timestamp=1`)
            .send(`comment=TestComment`)
            .send(`mood=1`)
            .send(`date=2019-01-01`)
        await testServer.post('/api/calendar-entry')
            .send(`userId=${user1}`)
            .send(`timestamp=2`)
            .send(`comment=TestComment`)
            .send(`mood=2`)
            .send(`date=2019-01-01`)
        await testServer.post('/api/calendar-entry')
            .send(`userId=${user1}`)
            .send(`timestamp=3`)
            .send(`comment=`)
            .send(`mood=1`)
            .send(`date=2019-01-02`)
        await testServer.post('/api/calendar-entry')
            .send(`userId=${user2}`)
            .send(`timestamp=4`)
            .send(`comment=`)
            .send(`mood=1`)
            .send(`date=2019-01-01`)

        expect((await testServer.get(`/api/calendar-day?userId=${user1}`)).body).toEqual([
            {
                id: `${user1}/20190101`,
                date: '2019-01-01T00:00:00.000Z',
                mood: 2,
                comment: 'TestComment'
            },
            {
                id: `${user1}/20190102`,
                date: '2019-01-02T00:00:00.000Z',
                mood: 1,
                comment: ''
            }
        ])

        expect((await testServer.get(`/api/calendar-day?userId=${user2}`)).body).toEqual([
            {
                id: `${user2}/20190101`,
                date: '2019-01-01T00:00:00.000Z',
                mood: 1,
                comment: ''
            }
        ])

    })
})
