import { injectable } from 'inversify'
import 'reflect-metadata'
import EntryData from './EntryData'
import Entry from './Entry'

@injectable()
export default class EntryFactory {

    public fromData(data: EntryData): Entry {
        return {
            id: data.id,
            date: data.date,
            mood: data.mood,
            comment: data.comment,
            timestamp: data.timestamp
        }
    }

}
