import Action from './Action'

export default interface ActionHandler {

    handle(action: Action): void

}
