import * as React from 'react'
import { range } from 'lodash'
import TableData from '../props/TableData'
import ActionHandler from '../action/ActionHandler'
import PanelCell from './PanelCell'

export default class Panel extends React.Component<{ data: TableData, actionHandler: ActionHandler }> {

    public render(): React.ReactNode {
        return (
            <div>
                <ul>
                    {
                        range(1, 8).map((mood) => <li key={ mood }>
                            <PanelCell
                                data={ this.props.data }
                                actionHandler={ this.props.actionHandler }
                                mood={ mood }
                            />
                        </li>)
                    }
                </ul>
            </div>
        )
    }

}
