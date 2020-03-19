import { inject, injectable } from 'inversify'
import Subscriber from '../state/Subscriber'
import ApplicationState from '../state/ApplicationState'
import ActionHandler from '../action/ActionHandler'
import RealUser from './RealUser'

@injectable()
export default class UserHandler implements Subscriber {

    constructor(
        private actionHandler: ActionHandler
    ) {}

    public init(state: ApplicationState): void {
        this.update(state)
    }

    public update(state: ApplicationState): void {
        if (state.user.id === '') {
            const fromStorageUserId = window.localStorage.getItem('userId')
            if (!fromStorageUserId) {
                // fetch('/api/user', {
                //     method: 'POST'
                // }).then(
                //     (resp) => resp.json()
                // ).then((data) => {
                //     window.localStorage.setItem('userId', data.id)
                //     return data.id
                // }).then(this.user.bind(this))
            } else {
                fetch(`/api/user/${fromStorageUserId}`, {
                    method: 'GET'
                }).then(
                    (resp) => resp.json()
                ).then(
                    (data) => data.id
                ).then(this.user.bind(this))
            }
        }
    }

    private user(userId: string): void {
        this.actionHandler.handle({
            transform(state: ApplicationState): ApplicationState {
                return {
                    ...state,
                    user: new RealUser(userId)
                }
            }
        })
    }

}
