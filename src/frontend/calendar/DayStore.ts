import Day from './Day'

export default class DayStore {

    constructor(
        private days: Day[]
    ) {}

    public get(date: Date): Day {
        return this.days.filter((calendarDay) => {
            const d = calendarDay.date
            return d.getFullYear() === date.getFullYear()
                && d.getMonth() === date.getMonth()
                && d.getDate() === date.getDate()
        })
        .reduce((prev, curr) => curr || prev, {
            id: '',
            comment: '',
            date,
            mood: 0
        })
    }

}
