import CreateUser from '../auth/CreateUser'
import GetUser from '../auth/GetUser'

export default interface Webserver {

    staticDir(dir: string): void

    createUser(handler: CreateUser): void

    getUser(handler: GetUser): void

    run(portNumber: number): void

}
