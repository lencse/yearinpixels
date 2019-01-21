import Action from './Action'

export default interface Reducer {

    apply(action: Action): void

}
