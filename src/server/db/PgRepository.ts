import UserSaver from '../auth/UserSaver'
import UserData from '../auth/UserData'
import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import PgConnection from './PgConnection'
import UserSavingData from '../auth/UserSavingData'
import UserStore from '../auth/UserStore'

@injectable()
export default class PgRepository implements
    UserSaver,
    UserStore {

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
                users u
            WHERE 1=1
                AND u.id = $1
            `, [
                id
            ]
        )

        return {
            id: dbResult.rows.pop().id
        }
    }

}
