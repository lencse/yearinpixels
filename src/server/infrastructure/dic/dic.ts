import { Container } from 'inversify'
import Webserver from '../server/Webserver'
import { SCALARS } from './params'
import config from '../../../../config/server/config'
// import { TYPES, SCALARS } from './params'
// import config from '../../../config/config'

class DIC {

    private container: Container = new Container()

    constructor() {
        this.initInterfaces()
        this.initClasses()
        this.initScalars()
    }

    private initInterfaces() {
    }

    private initClasses() {
        this.container.bind<Webserver>(Webserver).to(Webserver)
    }

    private initScalars(): void {
        this.container.bind<number>(SCALARS.Webserver.PortNumber).toConstantValue(config.portNumber)
    }

    public get server(): Webserver {
        return this.container.get<Webserver>(Webserver)
    }

}

const dic = new DIC()

export default dic
