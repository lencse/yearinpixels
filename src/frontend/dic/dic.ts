import { Container } from 'inversify'
import { TYPES, SCALARS } from './params'
import Store from '../store/Store'

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
        this.container.bind<Store>(Store).to(Store)
    }

    private initScalars(): void {
    }

    public get application(): Store {
        return this.container.get<Store>(Store)
    }

}

const dic = new DIC()

export default dic
