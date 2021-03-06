import CreateUser from '../auth/CreateUser'
import GetUser from '../auth/GetUser'
import CreateEntry from '../calendar/CreateEntry'
import GetDays from '../calendar/GetDays'

export default interface Webserver {

    app: any

    staticDir(dir: string): void

    createUser(handler: CreateUser): void

    createCalendarEntry(handler: CreateEntry): void

    getUser(handler: GetUser): void

    getDays(handler: GetDays): void

    assemble(): void,

    run(portNumber: number): void

}
