import DayData from './DayData'

export default interface DayStore {

    findDaysForUser(userId: string): Promise<DayData[]>

}
