import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Main from '../../../src/frontend/components/Main'
import { initial } from '../../../src/frontend/state/ApplicationState'
import changeCurrentDate from '../../../src/frontend/action/changeCurrentDate'
import dic from '../../../src/frontend/dic/dic'
import changeMood from '../../../src/frontend/action/changeMood'
import Store from '../../../src/frontend/store/Store'
import Ui from '../../../src/frontend/ui/Ui'

// class UiObserver implements Ui {

//     public main

//     public attach(store: Store) {
//         this.main = <Main actionHandler={ store } dataProvider={ store} />
//     }

// }

describe('Main', () => {
    it('Main component renders', () => {
        // const app = dic.app
        // const ui = new UiObserver()
        // app.run(initial(new Date('2019-01-01')), ui)
        // const main = ui.main
        // expect(renderer.create(main).toJSON()).toMatchSnapshot('main1')
        // // app.handle(changeCurrentDate(new Date('2019-01-02')))
        // // expect(renderer.create(main).toJSON()).toMatchSnapshot('main2')
        // // app.handle(changeMood(1))
        // // expect(renderer.create(main).toJSON()).toMatchSnapshot('main3')
    })
})
