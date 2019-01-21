import * as React from 'react'
import { range } from 'lodash'
import TableData from '../props/TableData'
import Cell from './Cell'
import Reducer from '../action/Reducer'

export default class Row extends React.Component<{ data: TableData, day: number, reducer: Reducer }> {

    public render(): React.ReactNode {
        const cells = range(1, 13).map((month) => (
            <Cell
                key={ month }
                data={ this.props.data }
                day={ this.props.day }
                month={ month }
                reducer={ this.props.reducer }
            />
        ))
        return (
            <tr>
                <th>{ this.props.day }.</th>
                { cells }
            </tr>
        )
    }

}
