import * as React from 'react'
import DataProvider from '../state/DataProvider'
import ApplicationState from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'
import Table from './Table'
import ActionHandler from '../action/ActionHandler'
import Panel from './Panel'

interface MainProps {

    dataProvider: DataProvider

    actionHandler: ActionHandler

}

export default class Main extends React.Component<MainProps, ApplicationState> implements Subscriber {

    constructor(props: MainProps, context) {
        super(props, context)
        props.dataProvider.addSubscriber(this)
    }

    public render(): React.ReactNode {
        return (
            <div>
                <Table data={{...this.state}} actionHandler={ this.props.actionHandler } />
                <Panel data={{...this.state}} actionHandler={ this.props.actionHandler } />
            </div>
        )
    }

    public init(state: ApplicationState): void {
        this.state = state
    }

    public update(state: ApplicationState): void {
        this.setState(state)
    }

}
