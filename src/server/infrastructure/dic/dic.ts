import { Container } from 'inversify'
import KoaWebserver from '../server/KoaWebserver'
import { TYPES, SCALARS } from './params'
import config from '../../../../config/server/config'
import Webserver from '../server/Webserver'
import Server from '../server/Server'
import CreateUser from '../../auth/CreateUser'
import PgRepository from '../db/PgRepository'
import UserSaver from '../../auth/UserSaver'
import PgConnection from '../db/PgConnection'

class DIC {

    private container: Container = new Container()

    constructor() {
        this.initInterfaces()
        this.initClasses()
        this.initScalars()
    }

    private initInterfaces() {
        this.container.bind<Webserver>(TYPES.Webserver).to(KoaWebserver)
        this.container.bind<UserSaver>(TYPES.UserSaver).to(PgRepository)
    }

    private initClasses() {
        this.container.bind<Server>(Server).to(Server)
        this.container.bind<CreateUser>(CreateUser).to(CreateUser)
        this.container.bind<PgConnection>(PgConnection).to(PgConnection)
    }

    private initScalars(): void {
        this.container.bind<number>(SCALARS.Webserver.PortNumber).toConstantValue(config.portNumber)
        this.container.bind<string>(SCALARS.PgConnection.dbUrl).toConstantValue(config.dbUrl)
    }

    public get server(): Server {
        return this.container.get<Server>(Server)
    }

}

const dic = new DIC()

export default dic
