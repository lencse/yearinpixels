import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './components/Main'
import dic from './dic/dic'
import { initial } from './state/ApplicationState'
import Store from './store/Store'

dic.app.run(initial(), {
    attach(store: Store) {
        ReactDom.render(
            <Main dataProvider={ store } actionHandler={ store } />,
            document.getElementById('react-root')
        )
    }
})
