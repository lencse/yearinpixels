import Day from './Day'
import equal from '../dates/equal'

export default class DayStore {

    constructor(
        private days: Day[]
    ) {}

    public get(date: Date): Day {
        return this.days.filter(
            (calendarDay) => equal(calendarDay.date, date)
        ).reduce((prev, curr) => curr || prev, {
            comment: '',
            date,
            mood: 0
        })
    }

}
