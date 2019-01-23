import * as React from 'react'
import TableData from '../props/TableData'
import ActionHandler from '../action/ActionHandler'
import changeMood from '../action/changeMood'

export default class PanelCell extends React.Component<{
    data: TableData,
    mood: number,
    actionHandler: ActionHandler
 }> {

    public render(): React.ReactNode {
        return (
            <span className={ `cell cell--mood-${this.props.mood}` } onClick={ this.click.bind(this)} />
        )
    }

    private click(): void {
        this.props.actionHandler.handle(changeMood(this.props.mood))
    }

}
