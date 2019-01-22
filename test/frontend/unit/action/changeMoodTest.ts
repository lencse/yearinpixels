import { initial } from '../../../../src/frontend/state/ApplicationState'
import changeMood from '../../../../src/frontend/action/changeMood'

describe('changeMood', () => {
    it('State is changed', () => {
        const init = initial(new Date('2019-01-01'))
        const newState = changeMood(1).transform(init)
        expect(newState.days.get(new Date(new Date('2019-01-01'))).mood).toEqual(1)
    })
})
