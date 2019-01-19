import { injectable, inject } from 'inversify'
import Webserver from './Webserver'
import { TYPES, SCALARS } from '../dic/params'
import 'reflect-metadata'
import CreateUser from '../auth/CreateUser'
import GetUser from '../auth/GetUser'
import CreateEntry from '../calendar/CreateEntry'
import GetDays from '../calendar/GetDays'

@injectable()
export default class Server {

    constructor(
        @inject(SCALARS.Webserver.PortNumber) private portNumber: number,
        @inject(TYPES.Webserver) private webserver: Webserver,
        @inject(CreateUser) private createUser: CreateUser,
        @inject(GetUser) private getUser: GetUser,
        @inject(CreateEntry) private createEntry: CreateEntry,
        @inject(GetDays) private getDays: GetDays
    ) {}

    public init(): Server {
        this.webserver.staticDir('./public')
        this.webserver.createUser(this.createUser)
        this.webserver.getUser(this.getUser)
        this.webserver.createCalendarEntry(this.createEntry)
        this.webserver.getDays(this.getDays)

        this.webserver.assemble()

        return this
    }

    public run(): void {
        this.webserver.run(this.portNumber)
    }

}
