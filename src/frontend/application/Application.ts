import { injectable } from 'inversify'
import 'reflect-metadata'
import DataProvider from '../state/DataProvider'
import ApplicationState, { initial } from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'
import Action from '../action/Action'
import Reducer from '../action/Reducer'

@injectable()
export default class Application implements DataProvider, Reducer {

    private subscribers: Subscriber[] = []

    private state: ApplicationState = initial()

    public run(): void {
        console.info('Application started')
    }

    public addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber)
        subscriber.init(this.state)
    }

    public apply(action: Action): void {
        this.state = action.transform(this.state)
        this.subscribers.forEach((subscriber) => {
            subscriber.update(this.state)
        })
    }

}
