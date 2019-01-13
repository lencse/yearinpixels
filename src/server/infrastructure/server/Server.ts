import { injectable, inject } from 'inversify'
import { TYPES, SCALARS } from '../dic/params'
import Webserver from './Webserver'
import 'reflect-metadata'

@injectable()
export default class Server {

    constructor(
        @inject(SCALARS.Webserver.PortNumber) private portNumber: number,
        @inject(TYPES.Webserver) private webserver: Webserver
    ) {}

    public run(): void {
        this.webserver.staticDir('./public')
        this.webserver.run(this.portNumber)
    }

}
