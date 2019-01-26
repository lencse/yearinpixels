import ApplicationState, { initial } from '../../../../src/frontend/state/ApplicationState'
import Store from '../../../../src/frontend/store/Store'
import Subscriber from '../../../../src/frontend/state/Subscriber'
import equal from '../../../../src/frontend/dates/equal'
import changeCurrentDate from '../../../../src/frontend/action/changeCurrentDate'
import Ui from '../../../../src/frontend/ui/Ui'

class Observer implements Subscriber, Ui {

    public state: ApplicationState

    public store: Store

    public init(state: ApplicationState): void {
        this.state = state
    }

    public update(state: ApplicationState): void {
        this.state = state
    }

    public attach(store: Store): void {
        this.store = store
    }
}

describe('Application', () => {
    it('App handles the state changes', () => {
        const store = new Store()
        store.init(initial(new Date('2019-01-01')))
        const observer = new Observer()
        store.addSubscriber(observer)
        expect(equal(observer.state.currentDate, new Date('2019-01-01'))).toBeTruthy()
        store.handle(changeCurrentDate(new Date('2019-01-02')))
        expect(equal(observer.state.currentDate, new Date('2019-01-02'))).toBeTruthy()
    })
    it('App attaches to UI', () => {
        const store = new Store()
        const observer = new Observer()
        store.run(observer)
        expect(observer.store).toBe(store)
    })
})
