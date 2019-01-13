import { injectable, inject } from 'inversify'
import { TYPES } from '../dic/params'
import Webserver from './Webserver'
import 'reflect-metadata'

@injectable()
export default class Server {

    constructor(
        @inject(TYPES.Webserver) private webserver: Webserver
    ) {}

    public run(): void {
        this.webserver.staticDir('./public')
        this.webserver.run()
    }

}
