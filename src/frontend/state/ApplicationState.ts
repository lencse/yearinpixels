import * as dateformat from 'dateformat'
import User from '../auth/User'
import NullUser from '../auth/NullUser'
import DayStore from '../calendar/DayStore'

export default interface ApplicationState {

    user: User

    days: DayStore,

    currentDate: Date

}

export function initial(): ApplicationState {
    return {
        user: new NullUser(),
        days: new DayStore([
            {
                id: 'A',
                date: new Date('2019-01-01'),
                mood: 1,
                comment: ''
            },
            {
                id: 'B',
                date: new Date('2019-01-02'),
                mood: 1,
                comment: ''
            },
            {
                id: 'C',
                date: new Date('2019-01-03'),
                mood: 2,
                comment: ''
            },
            {
                id: 'D',
                date: new Date('2019-01-04'),
                mood: 5,
                comment: ''
            },
            {
                id: 'E',
                date: new Date('2019-03-15'),
                mood: 6,
                comment: ''
            }
        ]),
        currentDate: new Date(dateformat(new Date(), 'yyyy-mm-dd'))
    }
}
