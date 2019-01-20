import * as React from 'react'
import { range } from 'lodash'
import TableData from '../props/TableData'
import Cell from './Cell'

export default class Row extends React.Component<{ data: TableData, day: number }> {

    public render(): React.ReactNode {
        const row = (() => range(1, 13).map((month) => (
            <Cell key={ month } data={ this.props.data } day={ this.props.day } month={ month } />
        )))
        return (
            <tr>
                <th>{ this.props.day }.</th>
                { row() }
            </tr>
        )
    }

}
