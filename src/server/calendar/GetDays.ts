import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { TYPES } from '../dic/params'
import DayStore from './DayStore'
import DayFactory from './DayFactory'
import GetDaysRequest from './GetDaysRequest'
import Day from './Day'
import DayData from './DayData'

@injectable()
export default class GetDays {

    constructor(
        @inject(TYPES.DayStore) private store: DayStore,
        @inject(DayFactory) private dayFactory: DayFactory
    ) {}

    public async handle(request: GetDaysRequest): Promise<Day[]> {
        return (await this.store.findDaysForUser(request.userId))
            .map((data: DayData) => this.dayFactory.fromData(data))
    }

}
