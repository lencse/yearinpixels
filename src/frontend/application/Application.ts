import { injectable } from 'inversify'
import 'reflect-metadata'
import DataProvider from '../state/DataProvider'
import ApplicationState, { initial } from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'
import Action from '../action/Action'
import ActionHandler from '../action/ActionHandler'
import Ui from '../ui/Ui'

@injectable()
export default class Application implements DataProvider, ActionHandler {

    private state: ApplicationState

    private subscribers: Subscriber[] = []

    public init(state: ApplicationState) {
        this.state = state
    }

    public run(ui: Ui): void {
        ui.attach(this)
    }

    public addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber)
        subscriber.init(this.state)
    }

    public handle(action: Action): void {
        this.state = action.transform(this.state)
        this.subscribers.forEach((subscriber) => {
            subscriber.update(this.state)
        })
    }

}
