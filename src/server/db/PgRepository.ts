import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import PgConnection from './PgConnection'

@injectable()
export default class PgRepository {

    constructor(
        @inject(PgConnection) protected connection: PgConnection
    ) {}

}
