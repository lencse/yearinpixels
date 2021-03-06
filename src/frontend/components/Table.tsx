import * as React from 'react'
import { range } from 'lodash'
import TableData from '../props/TableData'
import Row from './Row'
import ActionHandler from '../action/ActionHandler'

export default class Table extends React.Component<{ data: TableData, actionHandler: ActionHandler }> {

    public render(): React.ReactNode {
        const rows = range(1, 32).map((day) => (
            <Row data={ this.props.data } day={ day } key={ day } actionHandler={ this.props.actionHandler } />
        ))
        return (
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
        )
    }

}
