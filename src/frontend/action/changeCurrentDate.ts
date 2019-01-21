import ApplicationState from '../state/ApplicationState'
import Action from './Action'

export default function changeCurrentDate(to: Date): Action {
    return {
        transform(state: ApplicationState) {
            return {
                ...state,
                currentDate: to
            }
        }
    }
}
