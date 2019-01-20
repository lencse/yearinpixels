import * as React from 'react'
import TableData from '../props/TableData'

export default class Cell extends React.Component<{ data: TableData, day: number, month: number }> {

    public render(): React.ReactNode {
        const year = this.props.data.currentDate.getFullYear()
        const { month, day } = this.props
        const date = new Date(year, month - 1, day)
        const realDay = date.getDate() === day
        const classes: string[] = [
             realDay ?  'cell--real' : 'cell--fake'
        ]

        if (realDay) {
            classes.push(`cell--mood-${this.props.data.days.get(date).mood}`)
        }

        return (
            <td className={ classes.join(' ') } />
        )
    }

}
