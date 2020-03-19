import { inject, injectable } from 'inversify'
import Subscriber from '../state/Subscriber'
import ApplicationState from '../state/ApplicationState'
import ActionHandler from '../action/ActionHandler'

@injectable()
export default class CalendarHandler implements Subscriber {

    constructor(
        private actionHandler: ActionHandler
    ) {}

    public init(state: ApplicationState): void {
        this.update(state)
    }

    public update(state: ApplicationState): void {
    }
}
