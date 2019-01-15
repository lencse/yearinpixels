import { injectable, inject } from 'inversify'
import Webserver from './Webserver'
import { TYPES, SCALARS } from '../dic/params'
import 'reflect-metadata'
import CreateUser from '../../auth/CreateUser'

@injectable()
export default class Server {

    constructor(
        @inject(SCALARS.Webserver.PortNumber) private portNumber: number,
        @inject(TYPES.Webserver) private webserver: Webserver,
        @inject(CreateUser) private createUser: CreateUser
    ) {}

    public run(): void {
        this.webserver.staticDir('./public')
        this.webserver.createUserPath('/api/users', this.createUser)
        this.webserver.run(this.portNumber)
    }

}
