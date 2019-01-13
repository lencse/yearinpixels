import ApplicationState from './ApplicationState'

export default interface Subscriber {

    init(initial: ApplicationState): void

    update(state: ApplicationState): void

}
