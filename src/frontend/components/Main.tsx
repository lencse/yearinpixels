import * as React from 'react'
import Button from '@material-ui/core/Button'
import DataProvider from '../state/DataProvider'
import ApplicationState from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'

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
                <Button variant='contained' color='primary'>
                    { this.state.name }
                </Button>
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
