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
                date: new Date('2019-01-01'),
                mood: 1,
                comment: ''
            },
            {
                date: new Date('2019-01-02'),
                mood: 1,
                comment: ''
            },
            {
                date: new Date('2019-01-03'),
                mood: 2,
                comment: ''
            },
            {
                date: new Date('2019-01-04'),
                mood: 5,
                comment: ''
            },
            {
                date: new Date('2019-03-15'),
                mood: 6,
                comment: ''
            }
        ]),
        currentDate: new Date(dateformat(new Date(), 'yyyy-mm-dd'))
    }
}
