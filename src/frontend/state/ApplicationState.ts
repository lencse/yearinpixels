import * as dateformat from 'dateformat'
import User from '../auth/User'
import NullUser from '../auth/NullUser'
import DayStore from '../calendar/DayStore'

export default interface ApplicationState {

    user: User

    days: DayStore,

    currentDate: Date

}

export function initial(currentDate?: Date): ApplicationState {
    return {
        user: new NullUser(),
        days: new DayStore([]),
        currentDate: currentDate || new Date(dateformat(new Date(), 'yyyy-mm-dd'))
    }
}
