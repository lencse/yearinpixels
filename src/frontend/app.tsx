import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './components/Main'
import dic from './dic/dic'

const app = dic.application

ReactDom.render(
    <Main dataProvider={ app } />,
    document.getElementById('react-root')
)

app.run()
