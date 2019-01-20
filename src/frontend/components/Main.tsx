import * as React from 'react'
import DataProvider from '../state/DataProvider'
import ApplicationState from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'
import { range } from 'lodash'
import Table from './Table'

interface MainProps {

    dataProvider: DataProvider

}

export default class Main extends React.Component<MainProps, ApplicationState> implements Subscriber {

    constructor(props: MainProps, context) {
        super(props, context)
        props.dataProvider.addSubscriber(this)
    }

    public render(): React.ReactNode {
        return (
            <div>
                <Table data={{...this.state}} />
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
