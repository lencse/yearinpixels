import ApplicationState from './ApplicationState'

export default interface Subscriber {

    init(state: ApplicationState): void

    update(state: ApplicationState): void

}
