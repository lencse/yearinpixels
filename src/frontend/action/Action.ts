import ApplicationState from '../state/ApplicationState'

export default interface Action {

    transform(state: ApplicationState): ApplicationState

}
