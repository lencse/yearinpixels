import * as React from 'react'
import DataProvider from '../state/DataProvider'
import ApplicationState from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'
import Table from './Table'
import Reducer from '../action/Reducer'
import Panel from './Panel'

interface MainProps {

    dataProvider: DataProvider

    reducer: Reducer

}

export default class Main extends React.Component<MainProps, ApplicationState> implements Subscriber {

    constructor(props: MainProps, context) {
        super(props, context)
        props.dataProvider.addSubscriber(this)
    }

    public render(): React.ReactNode {
        return (
            <div>
                <Table data={{...this.state}} reducer={ this.props.reducer } />
                <Panel data={{...this.state}} reducer={ this.props.reducer } />
            </div>
        )
    }

    public init(initial: ApplicationState): void {
        this.state = initial
    }

    public update(state: ApplicationState): void {
        this.setState(state)
    }

}
