import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Main from '../../../src/frontend/components/Main'
import { initial } from '../../../src/frontend/state/ApplicationState'
import changeCurrentDate from '../../../src/frontend/action/changeCurrentDate'
import dic from '../../../src/frontend/dic/dic'
import changeMood from '../../../src/frontend/action/changeMood'
import Application from '../../../src/frontend/application/Application'
import Ui from '../../../src/frontend/ui/Ui'

class UiObserver implements Ui {

    public main

    public attach(app: Application) {
        this.main = <Main actionHandler={ app } dataProvider={ app} />
    }

}

describe('Main', () => {
    it('Main component renders', () => {
        const app = dic.application
        app.init(initial(new Date('2019-01-01')))
        const ui = new UiObserver()
        app.run(ui)
        const main = ui.main
        expect(renderer.create(main).toJSON()).toMatchSnapshot('main1')
        app.handle(changeCurrentDate(new Date('2019-01-02')))
        expect(renderer.create(main).toJSON()).toMatchSnapshot('main2')
        app.handle(changeMood(1))
        expect(renderer.create(main).toJSON()).toMatchSnapshot('main3')
    })
})
