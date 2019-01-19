import { injectable } from 'inversify'
import 'reflect-metadata'
import DataProvider from '../state/DataProvider'
import { initial } from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'

@injectable()
export default class Application implements DataProvider {

    private subscribers: Subscriber[] = []

    public run(): void {
        console.info('Application started')
    }

    public addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber)
        subscriber.init(initial())
    }

}
