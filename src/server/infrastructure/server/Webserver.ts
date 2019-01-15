import CreateUser from '../../auth/CreateUser'

export default interface Webserver {

    staticDir(dir: string): void

    createUserPath(path: string, handler: CreateUser): void

    run(portNumber: number): void

}
