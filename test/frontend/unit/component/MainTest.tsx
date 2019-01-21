import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Main from '../../../../src/frontend/components/Main'
import Reducer from '../../../../src/frontend/action/Reducer'
import Action from '../../../../src/frontend/action/Action'
import DataProvider from '../../../../src/frontend/state/DataProvider'
import Subscriber from '../../../../src/frontend/state/Subscriber'
import { initial } from '../../../../src/frontend/state/ApplicationState'

describe('Main', () => {
    it('Main component renders', () => {
        const reducer: Reducer = {
            apply(action: Action) {
            }
        }
        const dataProvider: DataProvider = {
            addSubscriber(subscriber: Subscriber) {
                subscriber.init(initial())
            }
        }
        const main = renderer.create(
            <Main reducer={ reducer } dataProvider={ dataProvider} />
        ).toJSON()
        expect(main).toMatchSnapshot()
    })
})
