import UserSaver from '../auth/UserSaver'
import UserData from '../auth/UserData'
import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import PgConnection from './PgConnection'
import UserSavingData from '../auth/UserSavingData'
import UserStore from '../auth/UserStore'
import EntrySaver from '../calendar/EntrySaver'
import EntryData from '../calendar/EntryData'
import EntrySavingData from '../calendar/EntrySavingData'
import DayData from '../calendar/DayData'
import DayStore from '../calendar/DayStore'

@injectable()
export default class PgRepository implements
    UserSaver,
    UserStore,
    EntrySaver,
    DayStore {

    constructor(
        @inject(PgConnection) private connection: PgConnection
    ) {}

    public async saveUser(data: UserSavingData): Promise<UserData> {
        const dbResult = await this.connection.pool.query(`
            INSERT INTO users (
                id,
                creation_date
            )
            VALUES (
                $1,
                NOW()
            )
            RETURNING id
            `, [
                data.id
            ]
        )

        return {
            id: dbResult.rows.pop().id
        }
    }

    public async findUser(id: string): Promise<UserData> {
        const dbResult = await this.connection.pool.query(`
            SELECT
                id
            FROM
                users
            WHERE id = $1
            `, [
                id
            ]
        )

        return {
            id: dbResult.rows.pop().id
        }
    }

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
