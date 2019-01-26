import { inject, injectable } from 'inversify'
import Store from '../store/Store'
import ApplicationState from '../state/ApplicationState'
import Ui from '../ui/Ui'

@injectable()
export default class App {

    constructor(
        @inject(Store) private store: Store
    ) {}

    public run(initialState: ApplicationState, ui: Ui): void {
        this.store.init(initialState)
        this.store.run(ui)
    }

}
