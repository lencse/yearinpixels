import { injectable } from 'inversify'
import 'reflect-metadata'
import DataProvider from '../state/DataProvider'
import ApplicationState from '../state/ApplicationState'
import Subscriber from '../state/Subscriber'

@injectable()
export default class Application implements DataProvider {

    private subscribers: Subscriber[] = []

    private c = 0

    public run(): void {
        console.info('Application started')
        setInterval(() => {
            this.c++
            this.subscribers.forEach((subscriber) => {
                subscriber.update({
                    name: `${this.c}`
                })
            })
        }, 1000)
    }

    public addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber)
        subscriber.init({
            name: 'Year in pixels'
        })
    }

}
