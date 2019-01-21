import * as dateformat from 'dateformat'
import Day from './Day'
import equal from '../dates/equal'
export default class DayStore {

    private _days: Map<string, Day> = new Map<string, Day>()

    constructor(
        days: Day[]
    ) {
        days.forEach((day) => {
            this._days.set(dateformat(day.date, 'yyyymmdd'), day)
        })
    }

    public get(date: Date): Day {
        const key = dateformat(date, 'yyyymmdd')
        return this._days.has(key) ?
            this._days.get(key) :
            {
                comment: '',
                date,
                mood: 0
            }
    }

    public put(day: Day): DayStore {
        const data: Day[] = []
        this._days.forEach((originalDay) =>
            equal(originalDay.date, day.date) || data.push(originalDay)
        )
        data.push(day)
        return new DayStore(data)
    }

}
