import ApplicationState, { initial } from '../../../../src/frontend/state/ApplicationState'
import Application from '../../../../src/frontend/application/Application'
import Subscriber from '../../../../src/frontend/state/Subscriber'
import equal from '../../../../src/frontend/dates/equal'
import changeCurrentDate from '../../../../src/frontend/action/changeCurrentDate'
import Ui from '../../../../src/frontend/ui/Ui'

class Observer implements Subscriber, Ui {

    public state: ApplicationState

    public app: Application

    public init(state: ApplicationState): void {
        this.state = state
    }

    public update(state: ApplicationState): void {
        this.state = state
    }

    public attach(app: Application): void {
        this.app = app
    }
}

describe('Application', () => {
    it('App handles the state changes', () => {
        const app = new Application()
        app.init(initial(new Date('2019-01-01')))
        const observer = new Observer()
        app.addSubscriber(observer)
        expect(equal(observer.state.currentDate, new Date('2019-01-01'))).toBeTruthy()
        app.handle(changeCurrentDate(new Date('2019-01-02')))
        expect(equal(observer.state.currentDate, new Date('2019-01-02'))).toBeTruthy()
    })
    it('App attaches to UI', () => {
        const app = new Application()
        const observer = new Observer()
        app.run(observer)
        expect(observer.app).toBe(app)
    })
})
