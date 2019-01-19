import { injectable } from 'inversify'
import 'reflect-metadata'
import DayData from './DayData'
import Day from './Day'

@injectable()
export default class DayFactory {

    public fromData(data: DayData): Day {
        return {
            id: data.id,
            date: data.date,
            mood: data.mood,
            comment: data.comment
        }
    }

}
