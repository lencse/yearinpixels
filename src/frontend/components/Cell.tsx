import * as React from 'react'
import TableData from '../props/TableData'
import equal from '../dates/equal'
import Reducer from '../action/Reducer'
import changeCurrentDate from '../action/changeCurrentDate'

export default class Cell extends React.Component<{ data: TableData, day: number, month: number, reducer: Reducer }> {

    public render(): React.ReactNode {
        const classes: string[] = [
             this.isReal ?  'cell--real' : 'cell--fake'
        ]

        if (this.isReal) {
            classes.push(`cell--mood-${this.props.data.days.get(this.date).mood}`)
        }

        if (equal(this.date, this.props.data.currentDate)) {
            classes.push('cell--current')
        }

        return (
            <td className={ classes.join(' ') } onClick={ this.click.bind(this) } />
        )
    }

    private click(): void {
        if (!this.isReal) {
            return
        }
        this.props.reducer.apply(changeCurrentDate(this.date))
    }

    private get date(): Date {
        const year = this.props.data.currentDate.getFullYear()
        const { month, day } = this.props
        return new Date(year, month - 1, day)
    }

    private get isReal(): boolean {
        return this.date.getDate() === this.props.day
    }

}
