import * as React from 'react'
import Button from '@material-ui/core/Button'

export default class Application extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <div>
                <Button variant='contained' color='primary'>
                    Test
                </Button>
            </div>
        )
    }

}
