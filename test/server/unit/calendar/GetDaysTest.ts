import DayData from '../../../../src/server/calendar/DayData'
import GetDays from '../../../../src/server/calendar/GetDays'
import DayFactory from '../../../../src/server/calendar/DayFactory'

describe('GetDays', () => {
    it('Days are retrieved', async () => {
        const store = {
            async findDaysForUser(userId): Promise<DayData[]> {
                return [{
                    id: 'x',
                    mood: 1,
                    date: new Date('2019-01-01'),
                    comment: ''
                }]
            }
        }
        const handler = new GetDays(
            store,
            new DayFactory()
        )

        const result = await handler.handle({userId: 'y'})

        expect('x').toEqual(result.pop().id)
    })
})
