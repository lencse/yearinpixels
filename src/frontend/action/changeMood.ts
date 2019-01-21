import ApplicationState from '../state/ApplicationState'
import Action from './Action'
import Day from '../calendar/Day'

export default function changeMood(to: number): Action {
    return {
        transform(state: ApplicationState) {
            const day: Day = {
                ...state.days.get(state.currentDate),
                mood: to
            }
            return {
                ...state,
                days: state.days.put(day)
            }
        }
    }
}
