import changeCurrentDate from '../../../../src/frontend/action/changeCurrentDate'
import { initial } from '../../../../src/frontend/state/ApplicationState'

describe('changeCurrentDate', () => {
    it('State is changed', () => {
        const newState = changeCurrentDate(new Date('2019-01-01')).transform(initial())
        expect(newState.currentDate).toEqual(new Date('2019-01-01'))
    })
})
