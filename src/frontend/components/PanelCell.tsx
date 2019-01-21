import * as React from 'react'
import TableData from '../props/TableData'
import Reducer from '../action/Reducer'
import changeMood from '../action/changeMood'

export default class PanelCell extends React.Component<{ data: TableData, mood: number, reducer: Reducer }> {

    public render(): React.ReactNode {
        return (
            <span className={ `cell cell--mood-${this.props.mood}` } onClick={ this.click.bind(this)} />
        )
    }

    private click(): void {
        this.props.reducer.apply(changeMood(this.props.mood))
    }

}
