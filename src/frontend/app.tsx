import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './components/Main'
import dic from './dic/dic'
import { initial } from './state/ApplicationState'
import Store from './store/Store'

const application = dic.application

application.init(initial())

application.run({
    attach(app: Store) {
        ReactDom.render(
            <Main dataProvider={ app } actionHandler={ app } />,
            document.getElementById('react-root')
        )
    }
})
