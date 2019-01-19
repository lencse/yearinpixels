import EntrySaver from '../calendar/EntrySaver'
import EntryData from '../calendar/EntryData'
import EntrySavingData from '../calendar/EntrySavingData'
import PgRepository from './PgRepository'

export default class PgEntrySaver extends PgRepository implements EntrySaver {

    public async saveEntry(data: EntrySavingData): Promise<EntryData> {
        const dbResult = await this.connection.pool.query(`
            INSERT INTO calendar_entries (
                id,
                mood,
                comment,
                user_id,
                calendar_day,
                ts,
                creation_date
            )
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                NOW()
            )
            RETURNING
                id,
                mood,
                comment,
                user_id,
                calendar_day,
                ts
            `, [
                data.id,
                data.mood,
                data.comment,
                data.userId,
                data.date,
                data.timestamp
            ]
        )

        const result = dbResult.rows.pop()

        return {
            id: result.id,
            mood: result.mood,
            comment: result.comment,
            date: result.calendar_day,
            timestamp: result.ts,
        }
    }
}
