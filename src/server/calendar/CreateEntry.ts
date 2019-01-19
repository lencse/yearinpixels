import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from '../dic/params'
import EntrySaver from './EntrySaver'
import UuidGenerator from '../uuid/UuidGenerator'
import EntryFactory from './EntryFactory'
import CreateEntryRequest from './CreateEntryRequest'
import Entry from './Entry'

@injectable()
export default class CreateEntry {

    constructor(
        @inject(TYPES.EntrySaver) private saver: EntrySaver,
        @inject(TYPES.UuidGenerator) private uuidGenerator: UuidGenerator,
        @inject(EntryFactory) private entryFactory: EntryFactory
    ) {}

    public async handle(request: CreateEntryRequest): Promise<Entry> {
        const data = await this.saver.saveEntry({
            id: this.uuidGenerator.generate(),
            date: request.date,
            mood: request.mood,
            userId: request.userId,
            comment: request.comment,
            timestamp: request.timestamp
        })
        return this.entryFactory.fromData(data)
    }

}
