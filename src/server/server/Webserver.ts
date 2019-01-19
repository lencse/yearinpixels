import CreateUser from '../auth/CreateUser'
import GetUser from '../auth/GetUser'
import CreateEntry from '../calendar/CreateEntry'

export default interface Webserver {

    staticDir(dir: string): void

    createUser(handler: CreateUser): void

    createCalendarEntry(handler: CreateEntry): void

    getUser(handler: GetUser): void

    run(portNumber: number): void

}
