import Subscriber from './Subscriber'

export default interface DataProvider {

    addSubscriber(subscriber: Subscriber): void

}
