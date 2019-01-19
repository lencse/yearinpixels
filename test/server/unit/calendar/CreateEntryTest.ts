import CreateEntry from '../../../../src/server/calendar/CreateEntry'
import EntrySavingData from '../../../../src/server/calendar/EntrySavingData'
import EntryData from '../../../../src/server/calendar/EntryData'
import EntryFactory from '../../../../src/server/calendar/EntryFactory'

describe('CreateEntry', () => {
    it('Entry is created after the request', async () => {
        const saver = {
            entry: null,
            async saveEntry(data: EntrySavingData): Promise<EntryData> {
                this.entry = data
                return data
            }
        }
        const handler = new CreateEntry(
            saver,
            {
                generate(): string {
                    return 'x'
                }
            },
            new EntryFactory()
        )

        const result = await handler.handle({
            comment: 'Comment',
            mood: 1,
            date: new Date('2019-01-01'),
            timestamp: 1,
            userId: 'y'
        })

        expect('x').toEqual(result.id)
        expect('y').toEqual(saver.entry.userId)
    })
})
