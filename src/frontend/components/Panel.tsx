import * as React from 'react'
import { range } from 'lodash'
import TableData from '../props/TableData'
import Reducer from '../action/Reducer'
import PanelCell from './PanelCell'

export default class Panel extends React.Component<{ data: TableData, reducer: Reducer }> {

    public render(): React.ReactNode {
        return (
            <div>
                <ul>
                    {
                        range(1, 8).map((mood) => <li key={ mood }>
                            <PanelCell data={ this.props.data } reducer={ this.props.reducer } mood={ mood } />
                        </li>)
                    }
                </ul>
            </div>
        )
    }

}
