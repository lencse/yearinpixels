import { inject, injectable } from 'inversify'
import Store from '../store/Store'
import ApplicationState from '../state/ApplicationState'
import Ui from '../ui/Ui'
import UserHandler from '../auth/UserHandler'

@injectable()
export default class App {

    constructor(
        @inject(Store) private store: Store
    ) {}

    public run(initialState: ApplicationState, ui: Ui): void {
        this.store.init(initialState)
        this.store.run(ui)
        this.store.addSubscriber(new UserHandler(this.store))
    }

}
