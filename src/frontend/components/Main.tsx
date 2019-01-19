import * as React from 'react'
import Button from '@material-ui/core/Button'
import DataProvider from '../state/DataProvider'
import ApplicationState from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'
import { range } from 'lodash'

interface MainProps {

    dataProvider: DataProvider

}

export default class Main extends React.Component<MainProps, ApplicationState> implements Subscriber {

    constructor(props: MainProps, context) {
        super(props, context)
        props.dataProvider.addSubscriber(this)
    }

    public render(): React.ReactNode {
        const row = (() => range(0, 12).map((idx) => (
            <td key={ idx }>
            </td>
        )))
        const rows = range(1, 32).map((idx) => (
            <tr key={ idx }>
                <th>{ idx }.</th>
                { row() }
            </tr>
        ))
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>J</th>
                            <th>F</th>
                            <th>M</th>
                            <th>A</th>
                            <th>M</th>
                            <th>J</th>
                            <th>J</th>
                            <th>A</th>
                            <th>S</th>
                            <th>O</th>
                            <th>N</th>
                            <th>D</th>
                        </tr>
                        { rows }
                    </tbody>
                </table>
            </div>
        )
    }

    public init(initial: ApplicationState): void {
        this.state = initial
    }

    public update(state: ApplicationState): void {
        this.setState(state)
    }

    private row() {
        return range(0, 12).map(() => (
            <td></td>
        ))
    }
}
