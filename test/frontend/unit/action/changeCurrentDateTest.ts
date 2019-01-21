import changeCurrentDate from '../../../../src/frontend/action/ChangeCurrentDate'
import { initial } from '../../../../src/frontend/state/ApplicationState'

describe('changeCurrentDate', () => {
    it('State is changed', () => {
        const newState = changeCurrentDate(new Date(2019, 0, 1)).transform(initial())
        expect(newState.currentDate).toEqual(new Date(2019, 0, 1))
    })
})
