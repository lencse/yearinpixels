import User from '../auth/User'
import Day from '../calendar/Day'

export default interface TableData {

    days: Day[]

    currentDate: Date

}
