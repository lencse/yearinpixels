import DayData from '../calendar/DayData'
import DayStore from '../calendar/DayStore'
import PgRepository from './PgRepository'

export default class PgDayStore extends PgRepository implements DayStore {

    public async findDaysForUser(userId: string): Promise<DayData[]> {
        const dbResult = await this.connection.pool.query(`
            SELECT
                id,
                mood,
                comment,
                TO_CHAR(calendar_day, 'YYYY-MM-DD') AS calendar_day
            FROM
                calendar_days
            WHERE user_id = $1
            ORDER BY calendar_day
            `, [
                userId
            ]
        )

        return dbResult.rows.map((dbRow) => {
            return {
                id: dbRow.id,
                mood: dbRow.mood,
                comment: dbRow.comment,
                date: new Date(dbRow.calendar_day)
            }
        })
    }

}
