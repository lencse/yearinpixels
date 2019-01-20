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
            this.props.data.days.filter((calendarDay) => {
                const d = calendarDay.date
                return d.getFullYear() === date.getFullYear()
                    && d.getMonth() === date.getMonth()
                    && d.getDate() === date.getDate()
            }).filter((item, idx) => 0 === idx)
            .forEach((current) => {
                classes.push(`cell--mood-${current.mood}`)
            })
        }

        return (
            <td className={ classes.join(' ') } />
        )
    }

}
