import UserSaver from '../auth/UserSaver'
import UserData from '../auth/UserData'
import UserSavingData from '../auth/UserSavingData'
import PgRepository from './PgRepository'

export default class PgUserSaver extends PgRepository implements UserSaver {

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

}
