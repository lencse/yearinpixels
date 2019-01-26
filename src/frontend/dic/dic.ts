import { Container } from 'inversify'
import { TYPES, SCALARS } from './params'
import Store from '../store/Store'
import App from '../app/App'

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
        this.container.bind<App>(App).to(App)
    }

    private initScalars(): void {
    }

    public get app(): App {
        return this.container.get<App>(App)
    }

}

const dic = new DIC()

export default dic
