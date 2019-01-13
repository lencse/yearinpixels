import { Container } from 'inversify'
import { TYPES, SCALARS } from './params'
import Application from '../application/Application'

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
        this.container.bind<Application>(Application).to(Application)
    }

    private initScalars(): void {
    }

    public get application(): Application {
        return this.container.get<Application>(Application)
    }

}

const dic = new DIC()

export default dic
