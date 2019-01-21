import DayStore from '../../../../src/frontend/calendar/DayStore'

describe('DayStore', () => {
    it('Day can be retrieved', () => {
        const store = new DayStore([
            {
                date: new Date('2019-01-01'),
                mood: 1,
                comment: ''
            }, {
                date: new Date('2019-01-03'),
                mood: 2,
                comment: 'Comment'
            }
        ])
        expect(store.get(new Date('2019-01-01'))).toEqual({
            date: new Date('2019-01-01'),
            mood: 1,
            comment: ''
        })
        expect(store.get(new Date('2019-01-02'))).toEqual({
            date: new Date('2019-01-02'),
            mood: 0,
            comment: ''
        })
        expect(store.get(new Date('2019-01-03'))).toEqual({
            date: new Date('2019-01-03'),
            mood: 2,
            comment: 'Comment'
        })
    })
})