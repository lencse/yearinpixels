import UserData from '../auth/UserData'
import UserStore from '../auth/UserStore'
import PgRepository from './PgRepository'

export default class PgUserStore extends PgRepository implements UserStore {

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

}
