import { Container } from 'inversify'
import KoaWebserver from '../server/KoaWebserver'
import { TYPES, SCALARS } from './params'
import config from '../../../../config/server/config'
import Webserver from '../server/Webserver'
import Server from '../server/Server'

class DIC {

    private container: Container = new Container()

    constructor() {
        this.initInterfaces()
        this.initClasses()
        this.initScalars()
    }

    private initInterfaces() {
        this.container.bind<Webserver>(TYPES.Webserver).to(KoaWebserver)
    }

    private initClasses() {
        this.container.bind<Server>(Server).to(Server)
    }

    private initScalars(): void {
        this.container.bind<number>(SCALARS.Webserver.PortNumber).toConstantValue(config.portNumber)
    }

    public get server(): Server {
        return this.container.get<Server>(Server)
    }

}

const dic = new DIC()

export default dic
