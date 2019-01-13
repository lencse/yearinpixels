import * as React from 'react'
import * as ReactDom from 'react-dom'
import Main from './components/Main'
import dic from './infrastructure/dic/dic'

const app = dic.application

app.run()

ReactDom.render(
    <Main />,
    document.getElementById('react-root')
)
