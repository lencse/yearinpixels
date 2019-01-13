import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export default class Application {

    public run(): void {
        console.info('Application started')
    }

}
